"use server";

import mysql from "mysql2/promise";

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

type changeEmailAddressParams = {
	emailAddress: string
}

/**
 * A function to add an email address to the online database for later use.
 * @param emailAddress Email address of the user subscribing. 
 * @returns Success represented as a `Boolean`.
 */
export async function 
addEmailAddressToNewsletter(params: changeEmailAddressParams) : Promise<Boolean> {
	const SQL = "INSERT IGNORE INTO `newsletter_subscribers` (`email_address`) VALUES (?);";

	const raw = await executeSQL({
		SQL,
		values: [ params.emailAddress ]
	});
	const result = Object.values(JSON.parse(JSON.stringify(raw)));
	console.log(raw);

	if (result[5] !== 0) {
		throw new Error(`${result[5]}`);
	} else {
		return true;
	}
}

/**
 * A function to remove an email address to the online database for later use.
 * @param emailAddress Email address to remove from the online database.
 */
export async function removeEmailAddressFromNewsletter(params: changeEmailAddressParams) {
	const SQL =
		"DELETE FROM `newsletter_subscribers` WHERE `email_address`='" + params.emailAddress + "';";

	executeSQL({
		SQL
	});
}

/**
 * A function to list the first N number of addresses in the online database.
 */
export async function listEmailAddress() : Promise<Array<string>> {
	const SQL =
		"SELECT `email_address` FROM `newsletter_subscribers`;";

	const raw = await executeSQL({ SQL });
	const result = Object.values(JSON.parse(JSON.stringify(raw)));

	const emailAddresses: Array<string> = [];
	result.map((row: any) => { emailAddresses.push(row.email_address); });

	return emailAddresses;
}
