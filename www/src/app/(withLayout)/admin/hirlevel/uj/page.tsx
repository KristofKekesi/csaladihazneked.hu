"use client";

import AdminWriteNewsletter from "@/components/admin/AdminWriteNewsletter";
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
function PageWithPassword(): JSX.Element {
	const searchParams = useSearchParams();
	const password = searchParams.get("password") ?? "";

	return ( <AdminWriteNewsletter password={ password } /> );
}

/**
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Lista(): JSX.Element {
	return (
		<Suspense>
			<PageWithPassword />
		</Suspense>
	);
}
