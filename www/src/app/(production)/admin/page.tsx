//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

/**
 * Only here to provide a working page for the layout.
 * @returns Boilerplate for a working page.
 */
export default function Page() {
	// https://flaviocopes.com/how-to-check-date-is-past-javascript/
	const firstDateIsPastDayComparedToSecond =
		(firstDate: Date, secondDate: Date) =>
			firstDate.setHours(0,0,0,0) - secondDate.setHours(0,0,0,0) < 0;

	// Guard closes.
	if (!process.env.NEXT_PUBLIC_SERVER_EXPIRATION_DATE) {
		throw new Error("NEXT_PUBLIC_SERVER_EXPIRATION_DATE environmental variable is not set.");
	}
	const SERVER_EXPIRATION_DATE = new Date(process.env.NEXT_PUBLIC_SERVER_EXPIRATION_DATE);
	
	return (
		<div className="px-8 py-4">
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Bérelt szerver</CardTitle>
				</CardHeader>
				<CardContent className="">
					{firstDateIsPastDayComparedToSecond(SERVER_EXPIRATION_DATE, new Date()) ?
						"A tartalomkezelő oldalt működtető bérelt szerver lejárt: " :
						"A tartalomkezelő oldalt működtető bérelt szerver lejárati ideje: "
					}
					
					<span className="font-bold ml-2">
						{ SERVER_EXPIRATION_DATE.toLocaleDateString("hu") }
					</span>
				</CardContent>
			</Card>
		</div>
	);
}
