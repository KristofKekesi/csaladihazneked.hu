"use server";

import { listNewsletterSubscribers } from "@/lib/mysql_api";
import { newsletterEmailHtml } from "@/lib/email_html";
import { sendEmail } from "@/lib/send_email";
import { Subscriber } from "@/types/Subscriber";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type sendNewsletterParams = {
	subject: string
	text: string,
	password: string
}

export type Params = Omit<sendNewsletterParams, "password">;

/**
 * Server action to send newsletter to subscribers.
 * @param subject Subject of the newsletter issue.
 * @param text The content of the newsletter issue.
 * @returns Success represented with a `Boolean`.
 */
export default async function 
sendNewsletter({subject, text, password}: sendNewsletterParams) : Promise<Boolean> {
	const emailAddresses = 
		await listNewsletterSubscribers({ password });

	const from = "Hírlevél <hirlevel@email.csaladihazneked.hu>";
	const html = newsletterEmailHtml({
		subject,
		text
	});

	let failed = 0;
	emailAddresses.map(async (subscriber: Subscriber) => {
		const to = subscriber.emailAddress;

		const result = await sendEmail({
			from,
			to,
			subject,
			text,
			html
		});

		if (!result) { failed++; }
	});

	const rate = (emailAddresses.length - failed) / emailAddresses.length;

	return rate >= 0.8;
	
}
