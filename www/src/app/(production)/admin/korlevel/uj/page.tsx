"use client";

import AdminWriteNewsletter from "@/components/admin/AdminWriteNewsletter";
import { useSearchParams } from "next/navigation";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Lista() {
	const searchParams = useSearchParams();
	const password = searchParams.get("password") ?? "";

	return (
		<AdminWriteNewsletter password={ password } />
	);
}
