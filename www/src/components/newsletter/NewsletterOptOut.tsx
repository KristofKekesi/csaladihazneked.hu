"use client";

import { Loader2, MailMinus, MailX, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import MidPageAction from "@/components/general/MidPageAction";
import { removeSubscriberFromNewsletter } from "@/lib/mysql_api";
import { useState } from "react";
import { validateEmailAddress } from "@/lib/validate";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	title: string,
	className?: string
}

/**
 * A component to opt out from the newsletter.
 * @param className Optional CSS classes in a `string`.
 * @returns A newsletter sign up component.
 */
export default function NewsletterOptOut(params: Params) {
	const [state, setState] = useState<string>("toBeSent");
	const [emailAddress, setEmailAddress] = useState<string>("");
	const [isEmailAddressValid, setIsEmailAddressValid] = useState<boolean>(true);

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
		removeSubscriberFromNewsletter({ emailAddress });
		setState("sent");
	}

	return (
		<MidPageAction
			title={ params.title }
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
							<Trash2 className="h-4 w-4 mr-2" />
							Leiratkozás
						</> : null }
						{ state === "sending" ? <>
							<Loader2 className="h-4 w-4 mr-2 animate-spin" />
							Leiratkozás
						</> : null }
						{ state === "sent" ? <>
							<MailMinus className="h-4 w-4 mr-2" />
							Leiratkozva
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
			<div>
				A hírlevélről leiratkozva törlünk minden elmentett adatot,
				így nem fog több emailt kapni.
			</div>
		</MidPageAction>
	);
}
