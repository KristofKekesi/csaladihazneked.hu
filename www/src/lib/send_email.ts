"use server";

// MonkeReacts > MailGun > v0.2
import formData from "form-data";
import MailGun from "mailgun.js";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	from: string,
	to: string,
	subject: string,
	text: string,
	html: string
}

/**
 * Server action to send an email with.
 * @param from Sender of the email.
 * @param to Receiver or receivers of the email.
 * @param subject Subject of the email.
 * @param text Basic text content of the email
 * @param html HTML content of the email.
 * @returns Success represented with a `Boolean`.
 */
export async function sendEmail({from, to, subject, text, html}: Params) : Promise<Boolean> {
	// Guard closes.
	if (!process.env.MAILGUN_API_KEY) {
		throw new Error("No MAILGUN_API_KEY environmental variable were provided.");
	}
	if (!process.env.MAILGUN_DOMAIN) {
		throw new Error("No MAILGUN_DOMAIN environmental variable were provided.");
	}
	if (!process.env.MAILGUN_RECEIVER) {
		throw new Error("No MAILGUN_RECEIVER environmental variable were provided.");
	}

	// Calling MailGun API. (https://www.mailgun.com/)
	const mailgun = new MailGun(formData);
	const client = mailgun.client({
		username: "api",
		key: process.env.MAILGUN_API_KEY,
		url: "https://api.eu.mailgun.net/"
	});

	const messageData = {
		from,
		to,
		subject,
		text,
		html
	};

	try {
		client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
	} catch (error: any) {
		return false;
	}

	return true;
}
