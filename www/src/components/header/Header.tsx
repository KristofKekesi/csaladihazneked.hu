"use client";

import Link from "next/link";

export default function Header(props: {}) {
	return(
		<div className="bg-[#BABEAE] px-6 pt-3 pb-9 flex flex-row justify-between gap-4">
			Név
			<div className="flex flex-row gap-4">
				<Link href={"blog"}>Blog</Link>
				<Link href={"galeria"}>Galéria</Link>
				<Link href={""}>Elérhetőség</Link>
			</div>
		</div>
	);
}
