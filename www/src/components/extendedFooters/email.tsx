"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import ExtendedFooter from "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { sendMessage } from "@/lib/send_message";
import { Textarea } from "@/components/ui/Textarea";
import { z } from "zod";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A component with an email sender action.
 * @returns An `ExtendedFooter` with an email sender action.
 */
export default function EmailExtendedFooter() {
	const [state, setState] = useState("toBeSent");

	const [name, setName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [message, setMessage] = useState("");

	const [validName, setValidName] = useState(true);
	const [validEmailAddress, setValidEmailAddress] = useState(true);
	const [validMessage, setValidMessage] = useState(true);

	/**
	 * A function to be executed on the submit event of the form.
	 * @param event `FormEvent` on submit.
	 */
	async function onSubmit(event: FormEvent) {
		event.preventDefault();

		// Validate data.
		const validateEmailAddress = z.object({
			emailAddress: z.string().regex(RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
		});
		const validateName = z.object({
			name: z.string().min(1)
		});
		const validateMessage = z.object({
			message: z.string().min(16)
		});

		let passed = true;
		if (!validateEmailAddress.safeParse({ emailAddress }).success) {
			setValidEmailAddress(false);
			passed = false;
		} else {
			setValidEmailAddress(true);
		}

		if (!validateName.safeParse({ name }).success) {
			setValidName(false);
			passed = false;
		} else {
			setValidName(true);
		}

		if (!validateMessage.safeParse({ message }).success) {
			setValidMessage(false);
			passed = false;
		} else {
			setValidMessage(true);
		}

		// Guard close.
		if (!passed) { return null; }

		// Send email.
		const status = await sendMessage({
			url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
			emailAddress: emailAddress,
			name: name,
			message: message
		});

		if (status) {
			setState("sent");
		} else {
			setState("error");
		}
	}

	return (
		<ExtendedFooter title="Email küldés">
			<form
				onSubmit={ onSubmit }
				className="grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2 col-span-5"
			>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className={ cn("text-base font-normal ml-2", 
					!validEmailAddress ? "text-red-700" : null) } htmlFor="email">
						Emailcím:
					</Label>
					<Input
						id="email"
						type="email"
						value={ emailAddress }
						disabled= { state === "sent" || state === "error" }
						variant={ !validEmailAddress ? "destructive" : null }
						onChange={ (event) => setEmailAddress(event.target.value) }
					/>
				</div>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className={ cn("text-base font-normal ml-2", 
					!validName ? "text-red-700" : null) } htmlFor="name">
						Név:
					</Label>
					<Input
						id="name"
						type="text"
						value={ name }
						autoComplete="username"
						variant={ !validName ? "destructive" : null }
						disabled= { state === "sent" || state === "error" }
						onChange={ (event) => setName(event.target.value) }
					/>
				</div>
				<Button
					variant="secondary"
					type="submit"
					disabled= { state === "sent" || state === "error" }
					className="py-1 px-2 rounded-md bg-white hover:bg-white/80
					transition-colors col-span-1 h-10 hidden md:inline"
				>
					{ state === "toBeSent" ? "Küldés" : null }
					{ state === "sent" ? "Elküldve" : null }
					{ state === "error" ? "Hiba" : null }
				</Button>
				<div className="flex flex-col items-start col-span-5 w-full">
					<Label className={ cn("text-base font-normal ml-2",
					!validMessage ? "text-red-700" : null) } htmlFor="message">
						Üzenet:
					</Label>
					<Textarea
						id="message"
						value={ message }
						variant={ !validMessage ? "destructive" : null }
						disabled= { state === "sent" || state === "error" }
						onChange={ (event) => setMessage(event.target.value) }
					/>
				</div>
				<div className="grid grid-cols-5 col-span-5 items-baseline">
					<span className={ cn("text-black/50 ml-2 text-base col-span-2", 
					(!validEmailAddress || !validName || !validMessage) ? "text-red-700" : null )} >
						*: kötelező
					</span>
					<Button
						variant="secondary"
						type="submit"
						disabled= { state === "sent" || state === "error" }
						className="py-1 mt-4 px-2 rounded-md bg-white hover:bg-white/80
						transition-colors col-span-3 h-10 inline md:hidden col-start-3"
					>
						{ state === "toBeSent" ? "Küldés" : null }
						{ state === "sent" ? "Elküldve" : null }
						{ state === "error" ? "Hiba" : null }
					</Button>
				</div>
			</form>
		</ExtendedFooter>
	);
}
