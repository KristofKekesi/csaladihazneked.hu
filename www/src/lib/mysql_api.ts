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
export async function executeSQL(params: executeParams) {
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

type addSubcriberParams = {
	subscriber: Subscriber
}

/**
 * A function to add an email address to the online database for later use.
 * @param emailAddress Email address of the user subscribing. 
 * @returns Success represented as a `Boolean`.
 */
export async function 
addSubscriberToNewsletter(params: addSubcriberParams) : Promise<Boolean> {
	const SQL = "INSERT IGNORE INTO `newsletter_subscribers` (`email_address`) VALUES (?);";

	const raw = await executeSQL({
		SQL,
		values: [ params.subscriber.emailAddress ]
	});
	const result = Object.values(JSON.parse(JSON.stringify(raw)));
	console.log(result[5]);
	if (result[5] !== 0) {
		return false;
	} else {
		return true;
	}
}

type removeSubscriberParams = {
	subscriber: Subscriber
}

/**
 * A function to remove an email address to the online database for later use.
 * @param emailAddress Email address to remove from the online database.
 */
export async function removeSubscriberFromNewsletter(params: removeSubscriberParams) {
	// eslint-disable-next-line max-len
	const SQL = "DELETE FROM `newsletter_subscribers` WHERE `email_address`='" + params.subscriber.emailAddress + "';";

	executeSQL({
		SQL
	});
}

type listSubscribersParams = {
	password: string
}

/**
 * A function to list the first N number of addresses in the online database.
 */
export async function 
listNewsletterSubscribers(params: listSubscribersParams) : Promise<Array<Subscriber>> {
	// Guard close
	if (params.password !== process.env.ADMIN_PASSWORD) {
		return [];
	}

	const SQL =
		"SELECT `email_address` FROM `newsletter_subscribers`;";

	const raw = await executeSQL({ SQL });
	const result = Object.values(JSON.parse(JSON.stringify(raw)));

	const emailAddresses: Array<Subscriber> = [];
	result.map((row: any) => { emailAddresses.push(
		{emailAddress: row.email_address}
	); });

	return emailAddresses;
}
