"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import ExtendedFooter from  "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import sendNewsletter from "@/lib/send_newsletter";
import { Textarea } from "../ui/Textarea";

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
export default function AdminWriteNewsletter({ password }: Params) {
	const [state, setState] = useState("toBeSent");
	const [subject, setSubject] = useState("");
	const [text, setText] = useState("");

	/**
	 * On submit event to send newsletter issue to subscribers.
	 * @param event `FormEvent` given from the `form`.
	 */
	async function onSubmit(event: FormEvent) {
		event.preventDefault();
		setState("sending");

		const success = await sendNewsletter({ subject, text, password });

		if (success) {
			setState("sent");
		} else {
			setState("error");
		}
	}

	return (
		<ExtendedFooter
			title="Új körlevél küldése"
			description= { `Körlevél küldése maximum 
			${ process.env.NEXT_PUBLIC_API_GET_NEWSLETTER_SUBSCRIBER_LIMIT } feliratkozónak.` }
			className="mt-6"
		>
			<form onSubmit={ onSubmit } className="col-span-5 grid grid-cols-5 gap-y-2 gap-x-4">
				<div className="flex flex-col items-start col-span-5 md:col-span-3 xl:col-span-2">
					<Label
						className="text-base font-normal ml-2"
						htmlFor="admin-newsletter-subject"
					>
							Tárgy:
					</Label>
					<Input
						type="text"
						value={ subject }
						id="admin-newsletter-subject"
						disabled={ state !== "toBeSent" }
						onChange={ (event) => setSubject(event.target.value) }
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colors w-full select-auto"
					/>
				</div>
				<div className="flex flex-col items-start col-span-5 md:col-span-5">
					<Label
						className="text-base font-normal ml-2"
						htmlFor="admin-newsletter-message"
					>
							Üzenet:
					</Label>
					<Textarea
						value={ text }
						disabled={ state !== "toBeSent" }
						id="admin-newsletter-message"
						onChange={ (event) => setText(event.target.value) }
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colors w-full select-auto col-span-5 h-96"
					/>
				</div>
				<div className="col-span-5 flex justify-end pt-4">
					<div className="flex gap-4">
						<Button
							variant="link"
							type="submit"
							className="py-1 px-0 rounded-md 
							transition-colors col-span-2 md:col-span-1 h-10"
						>
							Előnézet
						</Button>
						<Button
							variant="secondary"
							type="submit"
							disabled={ state !== "toBeSent" }
							className="py-1 px-4 rounded-md bg-white hover:bg-white/80
							transition-colors col-span-3 md:col-span-2 h-10"
						>
							{ state === "toBeSent" ? "Körlevél elküldése" : null }
							{ state === "sending" ? "Folyamanban" : null }
							{ state === "sent" ? "Körlevél elküldve" : null }
							{ state === "error" ? "Hiba" : null }
							
						</Button>
					</div>
				</div>
			</form>
		</ExtendedFooter>
	);
}
