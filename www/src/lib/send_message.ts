"use server";

import { validateEmailAddress, validateMessage, validateName } from "@/lib/validate";
import { contactEmailHtml } from "@/lib/email_html";
import { sendEmail } from "@/lib/send_email";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export type Params = {
	url?: string,
	emailAddress: string,
	name: string,
	message: string
}

/**
 * Server action to send an email with.
 * @param url The url from where the server action was initiated.
 * @param emailAddress Email address of the visitor. 
 * @param name Name of the visitor. 
 * @param message Message of the visitor. 
 * @returns Success represented with a `Boolean`.
 */
export async function sendMessage({url, emailAddress, name, message}: Params) : Promise<boolean> {
	// Guard closes.
	// Validating data.
	if (!validateEmailAddress({ emailAddress }) ||
	 !validateName({ name }) || 
	 !validateMessage({ message })) {
		return false;
	}
	if (!process.env.MAILGUN_API_KEY) {
		throw new Error("No MAILGUN_API_KEY environmental variable were provided.");
	}
	if (!process.env.MAILGUN_DOMAIN) {
		throw new Error("No MAILGUN_DOMAIN environmental variable were provided.");
	}
	if (!process.env.MAILGUN_RECEIVER) {
		throw new Error("No MAILGUN_RECEIVER environmental variable were provided.");
	}

	const text: string =
	(url !== undefined ? `URL: ${ url }\n` : "") +
	`Dátum: ${new Date().toLocaleDateString("hu-HU")}\n` +
	`Név: ${name}\nEmail: ${emailAddress}\nÜzenet: ${message}`;

	const html: string = contactEmailHtml({
		url,
		emailAddress,
		name,
		message
	});

	// sending email
	const result = await sendEmail({
		from: "Email űrlap <weboldal@email.csaladihazneked.hu>",
		to: process.env.MAILGUN_RECEIVER + ", kristofkekesispam@gmail.com",
		subject: "Új űrlap kitöltés",
		text,
		html
	});

	return result;
}
