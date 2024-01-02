"use client";

import Link from "next/link";

export default function Home() {
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
			<div className="-mb-6 px-6 pt-6 pb-3 grid grid-cols-8 justify-between gap-4 rounded-t-3xl text-black/75 bg-[#BABEAE]">
				<div className="flex gap-2 items-center col-span-2"><span>Emailcím:</span><input id="email" type="email" className="bg-white/50 focus:bg-white/30 hover:bg-white/30 rounded-md border-2 border-dashed focus:border-white border-transparent transition-colors"/></div>
				<div className="flex gap-2 items-center col-span-2">Név:<input type="name" autoComplete="username" className="bg-white/50 focus:bg-white/30 hover:bg-white/30 rounded-md border-2 border-dashed focus:border-white border-transparent transition-colors"/></div>
				<div className="flex gap-2 items-center col-span-7 w-full"><span>Üzenet:</span><input type="text" className="bg-white/50 focus:bg-white/30 hover:bg-white/30 rounded-md border-2 border-dashed focus:border-white border-transparent transition-colors w-full"/></div>
				<button type="submit" className="py-1 px-2 rounded-md bg-white/75 hover:bg-white transition-colors col-span-1">Küldés</button>
			</div>
		</main>
	)
}
