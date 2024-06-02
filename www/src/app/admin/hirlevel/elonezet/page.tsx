"use client";

import { newsletterEmailHtml } from "@/lib/email_html";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * Wrapper for the suspense boundary.
 */
function PageWithContent(): JSX.Element | string {
	const searchParams = useSearchParams();
	const subject = searchParams.get("subject") ?? "";
	const message = searchParams.get("message") ?? "";

	return (
		(subject === "" || message === "") ? "Hiányzó adatok" :
		<div dangerouslySetInnerHTML={{ __html:
			newsletterEmailHtml({
				subject: subject,
				message: message
			})
		}} />
	 );
}

/**
 * Page for /admin/hirlevel/elonezet.
 */
export default function Elonezet(): JSX.Element {
	return (
		<Suspense>
			<PageWithContent />
		</Suspense>
	);
}
