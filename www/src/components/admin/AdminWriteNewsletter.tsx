"use client";

import { Button, buttonVariants } from "@/components/ui/Button";
import { FormEvent, useState } from "react";
import { validateMessage, validateSubject } from "@/lib/validate";
import { cn } from "@/lib/utils";
import ExtendedFooter from  "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Link from "next/link";
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
	const [state, setState] = useState<string>("toBeSent");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [isSubjectValid, setIsSubjectValid] = useState<boolean>(true);
	const [isMessageValid, setIsMesageValid] = useState<boolean>(true);

	/**
	 * On submit event to send newsletter issue to subscribers.
	 * @param event `FormEvent` given from the `form`.
	 */
	async function onSubmit(event: FormEvent) {
		event.preventDefault();

		// Validate data.
		let passed = true;
		if (validateSubject({ subject })) {
			setIsSubjectValid(true);
		} else {
			setIsSubjectValid(false);
			passed = false;
		}
		if (validateMessage({ message })) {
			setIsMesageValid(true);
		} else {
			setIsMesageValid(false);
			passed = false;
		}

		// Guard close.
		if (!passed) { return null; }

		setState("sending");

		const success = await sendNewsletter({ subject, message, password });

		if (success) {
			setState("sent");
		} else {
			setState("error");
		}
	}

	return (
		<ExtendedFooter
			title="Új hírlevél küldése"
			description= { `Hírlevél küldése maximum 
			${ process.env.NEXT_PUBLIC_API_GET_NEWSLETTER_SUBSCRIBER_LIMIT } feliratkozónak.` }
			className="mt-6"
		>
			<form onSubmit={ onSubmit } className="col-span-5 grid grid-cols-5 gap-y-2 gap-x-4">
				<div className="flex flex-col items-start col-span-5 md:col-span-3 xl:col-span-2">
					<Label
						className="text-base font-normal ml-2"
						htmlFor="admin-newsletter-subject"
					>
							Tárgy: <sup>*</sup>
					</Label>
					<Input
						type="text"
						value={ subject }
						variant={ !isSubjectValid ? "destructive" : null }
						id="admin-newsletter-subject"
						disabled={ state !== "toBeSent" }
						onChange={ (event) => setSubject(event.target.value) }
					/>
				</div>
				<div className="flex flex-col items-start col-span-5 md:col-span-5">
					<Label
						className="text-base font-normal ml-2"
						htmlFor="admin-newsletter-message"
					>
							Üzenet: <sup>*</sup>
					</Label>
					<Textarea
						value={ message }
						disabled={ state !== "toBeSent" }
						id="admin-newsletter-message"
						variant={ !isMessageValid ? "destructive" : null }
						onChange={ (event) => setMessage(event.target.value) }
						className="h-96"
					/>
				</div>
				<div className="col-span-5 flex justify-between">
					<span className="text-black/50 ml-2 text-base col-span-2">
						*: kötelező
					</span>
					<div className="flex gap-4">
						<Link
							href={ 
								`/admin/hirlevel/elonezet?subject=${ subject }&message=${ message }`
							}
							target="_blank"
						>
							<div
								className={ cn(buttonVariants({variant: "link"}), 
								"py-1 px-0 rounded-md transition-colors col-span-2",
								"md:col-span-1 h-10") }
							>
								Előnézet
							</div>
						</Link>
						<Button
							variant="secondary"
							type="submit"
							disabled={ state !== "toBeSent" }
							className="py-1 px-4 rounded-md bg-white hover:bg-white/80
							transition-colors col-span-3 md:col-span-2 h-10"
						>
							{ state === "toBeSent" ? "Hírlevél elküldése" : null }
							{ state === "sending" ? "Folyamanban" : null }
							{ state === "sent" ? "Hírlevél elküldve" : null }
							{ state === "error" ? "Hiba" : null }
							
						</Button>
					</div>
				</div>
			</form>
		</ExtendedFooter>
	);
}
