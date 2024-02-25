"use client";

import { Loader2, Mail, MailCheck, MailX } from "lucide-react";
import { addEmailAddressToNewsletter } from "@/lib/mysql_api";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import MidPageAction from "@/components/general/MidPageAction";
import { useState } from "react";
import { validateEmailAddress } from "@/lib/validate";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	className?: string
}

/**
 * A component to sign up to the newsletter.
 * @param className Optional CSS classes in a `string`.
 * @returns A newsletter sign up component.
 */
export default function NewsletterSignUp(params: Params) {
	const [state, setState] = useState("toBeSent");
	const [emailAddress, setEmailAddress] = useState("");
	const [isEmailAddressValid, setIsEmailAddressValid] = useState(true);

	/**
	 * A function to be executed on the click event of the button.
	 * @param event `MouseEvent` on submit.
	 */
	async function onClick(event: any) {
		event.preventDefault();

		// Validate data.
		let passed = true;
		if (validateEmailAddress({ emailAddress })) {
			setIsEmailAddressValid(true);
		} else {
			setIsEmailAddressValid(false);
			passed = false;
		}

		// Guard close.
		if (!passed) { return null; }
		
		setState("sending");

		// Subscribe user to the newsletter
		const success = await addEmailAddressToNewsletter({ emailAddress });
		if (success) {
			setState("sent");
		} else {
			setState("error");
		}
	}

	return (
		<MidPageAction
			title="Hírlevél"
			action={
				<div className="flex gap-4 items-end justify-between 
				w-full sm:justify-normal flex-wrap">
					<div className="flex flex-col sm:flex-row sm:items-end sm:gap-4 flex-wrap">
						<Label className={ cn("text-base font-normal sm:mb-2 ml-2 sm:ml-0", 
						!isEmailAddressValid ? "text-red-700" : null) } htmlFor="newsletter-email">
								Emailcím:
							</Label>
						<div className="bg-secondary rounded-md">
							<Input
								id="newsletter-email"
								type="email"
								value={ emailAddress }
								className="bg-secondary"
								disabled= { state === "sent" || state === "error" }
								variant={ !isEmailAddressValid ? "destructive" : null }
								onChange={ (event) => setEmailAddress(event.target.value) }
							/>
						</div>
					</div>
					<Button
						variant="secondary"
						onClick={ onClick }
						disabled={ state !== "toBeSent" }
					>
						{ state === "toBeSent" ? <>
							<Mail className="h-4 w-4 mr-2" />
							Feliratkozás
						</> : null }
						{ state === "sending" ? <>
							<Loader2 className="h-4 w-4 mr-2 animate-spin" />
							Feliratkozás
						</> : null }
						{ state === "sent" ? <>
							<MailCheck className="h-4 w-4 mr-2" />
							Feliratkozva
						</> : null }
						{ state === "error" ? <>
							<MailX className="h-4 w-4 mr-2" />
							Hiba
						</> : null }						
					</Button>
				</div>
			}
			className={ cn("mx-6 mt-6", params.className) }
		>
			<>
				A hírlevélre feliratkozva élőben kaphatja meg a legfrissebb információkat.
			</>
		</MidPageAction>
	);
}
