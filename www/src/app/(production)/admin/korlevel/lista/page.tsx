"use client";

import AdminListNewsletterSubscribers from "@/components/admin/AdminListNewsletterSubscribers";
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
function PageWithPassword() {
	const searchParams = useSearchParams();
	const password = searchParams.get("password") ?? "";

	return ( <AdminListNewsletterSubscribers password={ password } /> );
}

/**
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Lista() {
	return (
		<Suspense>
			<PageWithPassword />
		</Suspense>
	);
}
