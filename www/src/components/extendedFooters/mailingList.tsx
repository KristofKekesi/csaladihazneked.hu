"use client";

import { Button } from "../ui/button";
import ExtendedFooter from "../general/footer/ExtendedFooter";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { sendGAEvent } from "@next/third-parties/google";

export default function MailingListExtendedFooter() {
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
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colors w-full select-auto"
					/>
				</div>
				<Button
					variant="secondary"
					type="submit"
					className="py-1 px-2 rounded-md bg-white hover:bg-white/80
					transition-colors col-start-3 col-span-3 md:col-span-1 h-10"
					onClick={() => sendGAEvent(
						{ event: "buttonClicked", value: "mailingList" }
					) }
				>
					Feliratkozás
				</Button>
			</>
		</ExtendedFooter>
	);
}
