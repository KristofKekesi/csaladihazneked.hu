"use client";

import Link from "next/link";

import { HOST } from "../../../config";

export default function Header(props: {}) {
	return(
		<>
			<div className="flex flex-col text-black/75 sticky top-0 z-40">
				<div className="flex flex-row justify-between gap-4 px-6 py-3 bg-[#BABEAE]">
				<Link href={"./"}>Név</Link>
					<div className="flex flex-row gap-4">
					<Link href={"./blog"}>Blog</Link>
				<Link href={"./galeria"}>Galéria</Link>
				<Link href={"./#elerhetosegek"}>Elérhetőség</Link>
					</div>
				</div>
				<div className="w-full flex justify-between">
					<div className="bg-[#BABEAE] h-6 w-6">
						<div className="w-full h-full bg-white rounded-tl-3xl" />
					</div>
					<div className="bg-[#BABEAE] h-6 w-6">
						<div className="w-full h-full bg-white rounded-tr-3xl" />
					</div>
				</div>
			</div>
			<div className="bg-[#BABEAE]">
			</div>
		</>
	);
}
