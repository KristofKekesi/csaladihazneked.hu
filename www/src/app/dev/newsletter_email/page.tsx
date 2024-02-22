import { newsletterEmailHtml } from "@/lib/email_html";
import { notFound } from "next/navigation";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns A developer utility page to test HTML emails.
 */
export default async function Page() {
	if ( process.env.NODE_ENV !== "development" ) { notFound(); }

	return (
		<div dangerouslySetInnerHTML={{ __html:
			newsletterEmailHtml({
				subject: "Test issue",
				text: "This is a test issue. This will not be sent."
			})
		}} />
	);
}
