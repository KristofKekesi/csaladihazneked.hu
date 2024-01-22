"use client";

import { Button } from "../ui/button";
import ExtendedFooter from "../general/footer/ExtendedFooter";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { sendGAEvent } from "@next/third-parties/google";
import { Textarea } from "../ui/textarea";

export default function EmailExtendedFooter() {
	return (
		<ExtendedFooter title="Email küldés">
			<>
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className="text-base font-normal ml-2" htmlFor="email">
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
				<div className="flex flex-col items-start col-span-5 md:col-span-2">
					<Label className="text-base font-normal ml-2" htmlFor="name">
						Név:
					</Label>
					<Input
						id="name"
						type="text"
						autoComplete="username"
						className="bg-white/40 focus:bg-white/20
						hover:bg-white/30 border-2 border-dashed focus:border-white
						border-transparent transition-colors w-full select-auto"
					/>
				</div>
				<Button
					type="submit"
					variant="secondary"
					className="py-1 px-2 rounded-md bg-white hover:bg-white/80
					transition-colors col-span-1 h-10 hidden md:inline"
				>
					Küldés
				</Button>
				<div className="flex flex-col items-start col-span-5 w-full">
					<Label className="text-base font-normal ml-2" htmlFor="message">
						Üzenet:
					</Label>
					<Textarea
						id="message"
						className="bg-white/40 focus:bg-white/20 hover:bg-white/30
						border-2 border-dashed focus:border-white border-transparent
						transition-colorsresize-none h-fit file:border-0 file:bg-transparent
						file:text-sm file:font-medium select-auto"
					/>
				</div>
				<div className="grid grid-cols-5 col-span-5 items-baseline">
					<span className="text-black/50 ml-2 text-base col-span-2">*: kötelező</span>
					<Button
						variant="secondary"
						type="submit"
						className="py-1 mt-4 px-2 rounded-md bg-white hover:bg-white/80
						transition-colors col-span-3 h-10 inline md:hidden col-start-3"
						onClick={() => sendGAEvent({ event: "buttonClicked", value: "sendEmail" })}
					>
						Küldés
					</Button>
				</div>
			</>
		</ExtendedFooter>
	);
}