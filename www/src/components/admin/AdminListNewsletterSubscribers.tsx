"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RefreshCw } from "lucide-react";
import { SubscriberTable } from "./SubscriberTable";
import { useState } from "react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	password: string
}

/**
 * An `ExtendedFooter` with a mailing list action.
 * @returns An `ExtendedFooter` with a join to a newsletter action.
 */
export default function AdminListNewsletterSubscribers(params: Params): JSX.Element {
	const [key, setKey] = useState<number>(0);

	/**
	 * On click event handler for the refresh button.
	 */
	function refreshOnClick(event: any): void {
		event.preventDefault();
		setKey(key + 1);
	}

	return (
		<Card className="m-6 rounded-3xl">
			<CardTitle className="px-6 pt-6 text-2xl font-bold font-serif 
			select-auto flex justify-between items-end pb-2">
				<p>Feliratkozók</p>
				<Button
					variant="outline"
					size="sm"
					onClick={ refreshOnClick }
				>
					<RefreshCw className="size-4" />
				</Button>
			</CardTitle>
			<CardContent>
				<SubscriberTable key={ key } password={ params.password } />
			</CardContent>
		</Card>
	);
}
