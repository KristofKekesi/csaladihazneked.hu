import { contactEmailHtml } from "@/lib/email_html";
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
			contactEmailHtml({
				url: process.env.NEXT_PUBLIC_DOMAIN,
				emailAddress: "email@address.com",
				name: "Test Visitor",
				message: "This is a test message. This will not be sent."
			})}
		} />
	);
}
