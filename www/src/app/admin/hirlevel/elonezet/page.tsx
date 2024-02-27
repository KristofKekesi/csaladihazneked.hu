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
function PageWithContent() {
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
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Elonezet() {
	return (
		<Suspense>
			<PageWithContent />
		</Suspense>
	);
}
