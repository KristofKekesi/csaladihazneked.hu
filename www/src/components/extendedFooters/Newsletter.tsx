"use client";

import { Button } from "@/components/ui/Button";
import ExtendedFooter from  "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * An `ExtendedFooter` with a mailing list action.
 * @returns An `ExtendedFooter` with a join to a newsletter action.
 */
export default function NewsletterExtendedFooter(): JSX.Element {
	return (
		<ExtendedFooter
			title="Szeretnél emailben értesülni a legfrissebb híreinkről?"
			description="Az emailcímed megadásával elsősorból
			értesülhetsz a legújabb tartalmainkról."
		>
			<>
				<div className="flex flex-col items-start col-span-5 md:col-span-4">
					<Label
						className="text-base font-normal ml-2"
						htmlFor="email"
					>
							Emailcím:
					</Label>
					<Input
						id="email"
						type="email"
					/>
				</div>
				<Button
					variant="secondary"
					type="submit"
					className="py-1 px-2 rounded-md bg-white hover:bg-white/80
					transition-colors col-start-3 col-span-3 md:col-span-1 h-10"
				>
					Feliratkozás
				</Button>
			</>
		</ExtendedFooter>
	);
}
