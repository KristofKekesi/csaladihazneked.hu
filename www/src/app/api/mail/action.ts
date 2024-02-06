"use server";

// MonkeReacts > MailGun > v0.1
import formData from "form-data";
import MailGun from "mailgun.js";
import z from "zod";

type Props = {
	emailAddress: string,
	name: string,
	message: string
}

export async function sendMail(props: Props) {
	// Getting data from the URL.
	const emailAddress = props.emailAddress;
	const name = props.name;
	const message = props.message;

	// Validating data.
	const validate = z.object({
		emailAddress: z.string().regex(RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)),
		name: z.string().min(1),
		message: z.string().min(16)
	});

	// Guard closes.
	const validateResponse = validate.safeParse({ emailAddress, name, message });
	if (!validateResponse.success) {
		return Response.json(validateResponse);
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
		return Response.json("a");
	}

	return Response.json("success");
}
