"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect } from "react";

import autosize from "@/lib/autosize_input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
	useEffect(() => {
        autosize("message", "10");
    }, []);

	return (
		<main className="flex flex-col just px-6 pt-3">
			<h1 className="text-2xl font-mono font-bold italic">Bemutatkozás</h1>
			<p>A fejleményeket itt tudod majd követni. Amikor készen lesz az oldal publikus lesz, és kereshető lesz a Google által.</p>
			<div className="flex flex-col w-full justify-between items-baseline px-6 pt-6">
				<h2 className="text-xl font-mono font-bold italic" id="elerhetosegek">Elérhetőségek</h2>
				<div>
					<div className="flex sm:flex-row flex-col gap-x-4 pb-4">
						<div><span className="font-bold">Tel.: </span><Link href={"tel:+36302342037"}>+36 30 234 2037</Link></div>
						<div><span className="font-bold">Email: </span><Link href={"mailto:hello@csaladihazneked.hu"}>hello@csaladihazneked.hu</Link></div>
					</div>
				</div>
			</div>
			<div className="-mb-6 px-6 pt-6 pb-6 grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2 rounded-t-3xl text-black/75 bg-[#BABEAE]">
				<div className="flex flex-col items-start col-span-2"><Label className="text-base font-normal ml-2" htmlFor="email">Emailcím:</Label><Input id="email" type="email" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors w-full" /></div>
				<div className="flex flex-col items-start col-span-2"><Label className="text-base font-normal ml-2" htmlFor="name">Név:</Label><Input id="name" type="text" autoComplete="username" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors w-full" /></div>
				<button type="submit" className="py-1 px-2 rounded-md bg-white hover:bg-white/80 transition-colors col-span-1 h-10">Küldés</button>
				<div className="flex flex-col items-start col-span-5 w-full"><Label className="text-base font-normal ml-2" htmlFor="message">Üzenet:</Label><Textarea id="message" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors resize-none h-fit file:border-0 file:bg-transparent file:text-sm file:font-medium" /></div>
			</div>
		</main>
	)
}
