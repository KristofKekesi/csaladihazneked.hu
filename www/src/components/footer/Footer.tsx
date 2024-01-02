"use client";

import Link from "next/link";
import { HOST } from "../../../config";
import { Separator } from "../ui/separator";

export default function Footer(props: {}) {
	return(
		<footer className="w-full bg-[#B0A187] px-6 pt-6 pb-3 flex flex-row justify-between gap-4 rounded-t-3xl text-black/75">
			<div className="flex flex-col sm:flex-row justify-between">
				<p>
					<Link href={"./"}>csaladihazneked.hu</Link> © 2023
				</p>
				<Link className="inline sm:hidden" href="https://www.kekesi.dev">Készítette Kékesi Kristóf</Link>
			</div>
			<div className="flex flex-row gap-4">
				<div className="flex flex-col sm:flex-row gap-4 items-end">
					<Link href={"./blog"}>Blog</Link>
					<Link href={"./galeria"}>Galéria</Link>
				</div>
				<Link className="hidden sm:inline" href={"./#elerhetosegek"}>Elérhetőség</Link>
				<Separator orientation="vertical" className="bg-black/50" />
				<div className="flex flex-col sm:flex-row gap-4">
					<Link href={"./tervrajzok"}>Tervrajzok</Link>
					<Link className="inline sm:hidden" href={"./#elerhetosegek"}>Elérhetőség</Link>
				</div>
			</div>
		</footer>
	);
}
