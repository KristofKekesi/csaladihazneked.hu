"use server";

// MonkeReacts > MailGun > v0.1
import formData from "form-data";
import MailGun from "mailgun.js";
import z from "zod";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	emailAddress: string,
	name: string,
	message: string
}

/**
 * Server action to send an email with.
 * @param emailAddress Email address of the visitor. 
 * @param name Name of the visitor. 
 * @param message Message of the visitor. 
 * @returns Success represented with a `Boolean`.
 */
export async function sendEmail(params: Params) : Promise<Boolean> {
	// Getting data from the URL.
	const emailAddress = params.emailAddress;
	const name = params.name;
	const message = params.message;

	// Validating data.
	const validate = z.object({
		emailAddress: z.string().regex(RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)),
		name: z.string().min(1),
		message: z.string().min(16)
	});

	// Guard closes.
	const validateResponse = validate.safeParse({ emailAddress, name, message });
	if (!validateResponse.success) {
		return false;
	}
	if (process.env.MAILGUN_API_KEY === undefined) {
		throw new Error("No MAILGUN_API_KEY environmental variable were provided.");
	}
	if (process.env.MAILGUN_DOMAIN === undefined) {
		throw new Error("No MAILGUN_DOMAIN environmental variable were provided.");
	}
	if (process.env.MAILGUN_RECEIVER === undefined) {
		throw new Error("No MAILGUN_RECEIVER environmental variable were provided.");
	}

	// Calling MailGun API. (https://www.mailgun.com/)
	const mailgun = new MailGun(formData);
	const client = mailgun.client({
		username: "api",
		key: process.env.MAILGUN_API_KEY,
		url: "https://api.eu.mailgun.net/"
	});

	const text: string =
	`Dátum: ${new Date().toLocaleDateString("hu-HU")}\n` +
	`Név: ${name}\nEmail: ${emailAddress}\nÜzenet: ${message}`;

	const messageData = {
		from: "Email űrlap <weboldal@email.csaladihazneked.hu>",
		to: process.env.MAILGUN_RECEIVER,
		subject: "Új űrlap kitöltés",
		text: text,
	};

	try {
		client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
	} catch (error: any) {
		return false;
	}

	return true;
}
