"use client";

import { FormEvent, useEffect, useState } from "react";
import { validateEmailAddress, validateMessage, validateName } from "@/lib/validate";
import autosizeTextarea from "@/lib/autosize_textarea";
import { Blueprint } from "@/types/Blueprint";
import { Button } from "@/components/ui/Button";
import ExtendedFooter from "@/components/general/footer/ExtendedFooter";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { sendMessage } from "@/lib/send_message";
import { Textarea } from "@/components/ui/Textarea";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type extendedFooterParams = {
	blueprint: Blueprint,
	className?: string
}

/**
 * A component with an email sender action.
 * @param blueprint A `Blueprint` `Object` to display in the `ExtendedFooter`.
 * @param className An optional `string` containing CSS classes.
 * @returns An `ExtendedFooter` with an email sender action.
 */
export default function BlueprintEmailExtendedFooter(params: extendedFooterParams): JSX.Element {
	const [state, setState] = useState<string>("toBeSent");

	const [name, setName] = useState<string>("");
	const [emailAddress, setEmailAddress] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [isEmailAddressValid, setIsEmailAddressValid] = useState<boolean>(true);
	const [isNameValid, setIsNameValid] = useState<boolean>(true);
	const [isMessageValid, setIsMesageValid] = useState<boolean>(true);

	useEffect(() => {
		autosizeTextarea({
			textarea_id: "message"
		});
	});

	/**
	 * A function to be executed on the submit event of the form.
	 * @param event `FormEvent` on submit.
	 */
	async function onSubmit(event: FormEvent): Promise<void> {
		event.preventDefault();
		
		// Validate data.
		let passed = true;
		if ( validateEmailAddress({ emailAddress })) {
			setIsEmailAddressValid(true);
		} else {
			setIsEmailAddressValid(false);
			passed = false;
		}

		if ( validateName({ name }) ) {
			setIsNameValid(true);
		} else {
			setIsNameValid(false);
			passed = false;
		}

		if ( validateMessage({ message }) ) {
			setIsMesageValid(true);
		} else {
			setIsMesageValid(false);
			passed = false;
		}

		// Guard close.
		if (!passed) {
			return;
		}

		// Send email.
		const status = await sendMessage({
			url: `${ process.env.NEXT_PUBLIC_DOMAIN }/tervrajzok/${ params.blueprint.slug }`,
			emailAddress: emailAddress,
			name: name,
			message: message
		});

		if (status) { setState("sent"); } else { setState("error"); }
	}

	return (
		<ExtendedFooter
			title="Email küldés tervrajzzal kapcsolatban"
			className={ params.className }
		>
			<form
				onSubmit={ onSubmit }
				className="grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2 col-span-5"
			>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className="text-base font-normal ml-2" htmlFor="email">
						Emailcím: <sup>*</sup>
					</Label>
					<Input
						id="email"
						type="email"
						value={ emailAddress }
						variant={ !isEmailAddressValid ? "destructive" : null }
						onChange={ (event) => setEmailAddress(event.target.value) }
					/>
				</div>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className="text-base font-normal ml-2" htmlFor="name">
						Név: <sup>*</sup>
					</Label>
					<Input
						id="name"
						type="text"
						autoComplete="username"
						value={ name }
						variant={ !isNameValid ? "destructive" : null }
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
					<Label className="text-base font-normal ml-2" htmlFor="message">
						Üzenet: <sup>*</sup>
					</Label>
					<Textarea
						id="message"
						value={ message }
						variant={ !isMessageValid ? "destructive" : null }
						onChange={ (event) => setMessage(event.target.value) }
					/>
				</div>
				<div className="grid grid-cols-5 col-span-5 items-baseline">
					<span className="text-black/50 ml-2 text-base col-span-2">
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
