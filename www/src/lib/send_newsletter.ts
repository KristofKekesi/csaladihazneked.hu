"use server";

import { listEmailAddress } from "@/lib/mysql_api";
import { newsletterEmailHtml } from "@/lib/email_html";
import { sendEmail } from "@/lib/send_email";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export type Params = {
	subject: string
	text: string
}

/**
 * Server action to send newsletter to subscribers.
 * @param subject Subject of the newsletter issue.
 * @param text The content of the newsletter issue.
 * @returns Success represented with a `Boolean`.
 */
export default async function sendNewsletter({subject, text}: Params) : Promise<Boolean> {
	const emailAddresses = await listEmailAddress();

	const from = "Hírlevél <hirlevel@email.csaladihazneked.hu>";
	const html = newsletterEmailHtml({
		subject,
		text
	});

	let failed = 0;
	emailAddresses.map(async (emailAddress) => {
		const to = emailAddress;

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
