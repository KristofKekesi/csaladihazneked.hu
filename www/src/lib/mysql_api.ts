"use server";

import mysql from "mysql2/promise";
import { Subscriber } from "@/types/Subscriber";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type executeParams = {
	SQL: string,
	values?: Array<string>
}

/**
 * A function to execute SQL on the online mysql database for this project.
 * @param SQL An SQL to run
 * @param valuse An optional `Array` to use when inserting data to a table.
 */
export async function executeSQL(params: executeParams): Promise<mysql.QueryResult> {
	const connection = await mysql.createConnection({
		host: process.env.MYSQL_ONLINE_DATABASE_HOST,
		user: process.env.MYSQL_ONLINE_DATABASE_USER,
		database: process.env.MYSQL_ONLINE_DATABASE_DATABASE,
		password: process.env.MYSQL_ONLINE_DATABASE_PASSWORD
	});

	const [rows, _fields] = await connection.execute(params.SQL, params.values);
	connection.destroy();

	return rows;
}

/**
 * A function to inicialize the database with tables.
 */
export async function initDatabase(): Promise<boolean> {
	const SQL = `
		CREATE TABLE IF NOT EXISTS newsletter_subscribers (
			  email_address        varchar(320)                        UNIQUE NOT NULL
			, timestamp_subscribed timestamp DEFAULT current_timestamp NOT NULL
		);
	`;

	const raw = await executeSQL({
		SQL
	});
	const result = Object.values(JSON.parse(JSON.stringify(raw)));
	if (result[5] !== 0) {
		return false;
	} else {
		return true;
	}
}

type addEmailAddressParams = {
	emailAddress: string
}

/**
 * A function to add an email address to the online database for later use.
 * @param emailAddress Email address of the user subscribing. 
 * @returns Success represented as a `Boolean`.
 */
export async function 
addEmailAddressToNewsletter({emailAddress}: addEmailAddressParams): Promise<boolean> {
	// Guard close.
	if (!(process.env.SHOULD_BE_ABLE_TO_SUBSCRIBE_TO_NEWSLETTER === "true")) {
		return false;
	}
	const isThisEmailAddressSubscribed = 
		await isEmailAddressSubscribed({ emailAddress: emailAddress });
	if (isThisEmailAddressSubscribed) {
		return true;
	}

	await initDatabase();

	const SQL = "INSERT IGNORE INTO `newsletter_subscribers` (`email_address`) VALUES (?);";

	const raw = await executeSQL({
		SQL,
		values: [ emailAddress ]
	});
	const result = Object.values(JSON.parse(JSON.stringify(raw)));
	if (result[5] !== 0) {
		return false;
	} else {
		return true;
	}
}

type removeSubscriberParams = {
	emailAddress: string
}

/**
 * A function to remove an email address to the online database for later use.
 * @param emailAddress Email address to remove from the online database.
 */
export async function removeSubscriberFromNewsletter({ emailAddress }: removeSubscriberParams) 
: Promise<void> {
	// Guard close.
	const immutableSubscriberEmailAddresses =
		(process.env.IMMUTABLE_NEWSLETTER_SUBSCRIBERS ?? "" ).split(";");
	if (immutableSubscriberEmailAddresses.includes(emailAddress)) {
		return;
	}

	await initDatabase();

	const SQL =
		// eslint-disable-next-line max-len
		"DELETE FROM `newsletter_subscribers` WHERE `email_address`='" + emailAddress + "';";

	executeSQL({
		SQL
	});
}

type isEmailAddressSubscribedParams = {
	emailAddress: string
}

/**
 * A function to verify if email address is subscribed.
 * @param emailAddress Email address that we want to know if subscribed. 
 */
export async function 
isEmailAddressSubscribed({ emailAddress }: isEmailAddressSubscribedParams): Promise<boolean> {
	const SQL =
		// eslint-disable-next-line max-len
		"SELECT `email_address` FROM `newsletter_subscribers` WHERE `email_address`='" + emailAddress + "';";
	const raw = await executeSQL({ SQL });
	const result = Object.values(JSON.parse(JSON.stringify(raw)));

	if (result.length === 1 ) {
		return true;
	} else {
		return false;
	}
}

type listSubscribersParams = {
	password: string
}

/**
 * A function to list the first N number of addresses in the online database.
 */
export async function 
listNewsletterSubscribers(params: listSubscribersParams): Promise<Array<Subscriber>> {
	// Guard close
	if (params.password !== process.env.ADMIN_PASSWORD) {
		return [];
	}

	const SQL =
		"SELECT `email_address`, `timestamp_subscribed` FROM `newsletter_subscribers`;";

	const raw = await executeSQL({ SQL });
	const result = Object.values(JSON.parse(JSON.stringify(raw)));

	const emailAddresses: Array<Subscriber> = [];
	result.map((row: any) => { 
		emailAddresses.push({
		emailAddress: row.email_address,
		timestampSubscribed: new Date(row.timestamp_subscribed)
	}); });

	return emailAddresses;
}
