"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns A developer utility page to test HTML emails.
 */
export default function Page() {
	if ( process.env.NODE_ENV !== "development" ) { notFound(); }

	const [state, setState] = useState("toBeRan");

	useEffect(() => {
		/**
		 * Wrapper function to run async function in useEffect.
		 */
		async function fetchDB() {
			// run server action here.
			
			//

			setState("Ran");
		}
	
		fetchDB();
	  }, []);

	return (
		state === "toBeRan" ? "Not yet." : `${state}`
	);
}
