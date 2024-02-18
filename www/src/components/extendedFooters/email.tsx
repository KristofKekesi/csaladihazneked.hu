"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import ExtendedFooter from "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { sendEmail } from "@/lib/send_email";
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
			document.getElementById("email-label")?.classList.add("text-red-700");
			document.getElementById("email")?.classList.add("border-red-700", "bg-red-900/20");

			passed = false;
		} else {
			document.getElementById("email-label")?.classList.remove("text-red-700");
			document.getElementById("email")?.classList.remove("border-red-700", "bg-red-900/20");
		}

		if (!validateName.safeParse({ name }).success) {
			document.getElementById("name-label")?.classList.add("text-red-700");
			document.getElementById("name")?.classList.add("border-red-700", "bg-red-900/20");

			passed = false;
		} else {
			document.getElementById("name-label")?.classList.remove("text-red-700");
			document.getElementById("name")?.classList.remove("border-red-700", "bg-red-900/20");
		}

		if (!validateMessage.safeParse({ message }).success) {
			document.getElementById("message-label")?.classList.add("text-red-700");
			document.getElementById("message")?.classList.add("border-red-700", "bg-red-900/20");

			passed = false;
		} else {
			document.getElementById("message-label")?.classList.remove("text-red-700");
			document.getElementById("message")?.classList.remove("border-red-700", "bg-red-900/20");
		}

		// Guard close.
		if (!passed) {
			document.getElementById("required")?.classList.add("text-red-700");

			return null;
		} else {
			document.getElementById("required")?.classList.remove("text-red-700");
		}

		// Send email.
		const status = await sendEmail({
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
					<Label className="text-base font-normal ml-2" htmlFor="email" id="email-label">
						Emailcím:
					</Label>
					<Input
						id="email"
						type="email"
						value={ emailAddress }
						onChange={ (event) => setEmailAddress(event.target.value) }
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colors w-full select-auto"
					/>
				</div>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className="text-base font-normal ml-2" htmlFor="name" id="name-label">
						Név:
					</Label>
					<Input
						id="name"
						type="text"
						autoComplete="username"
						value={ name }
						onChange={ (event) => setName(event.target.value) }
						className="bg-white/40 focus:bg-white/20
						hover:bg-white/30 border-2 border-dashed focus:border-white
						border-transparent transition-colors w-full select-auto"
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
					<Label
						className="text-base font-normal ml-2"
						htmlFor="message" id="message-label"
					>
						Üzenet:
					</Label>
					<Textarea
						id="message"
						value={ message }
						onChange={ (event) => setMessage(event.target.value) }
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colorsresize-none h-fit file:border-0 file:bg-transparent
						file:text-sm file:font-medium select-auto"
					/>
				</div>
				<div className="grid grid-cols-5 col-span-5 items-baseline">
					<span className="text-black/50 ml-2 text-base col-span-2" id="required">
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
