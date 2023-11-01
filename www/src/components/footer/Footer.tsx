import Link from "next/link";

export default function Footer(props: {}) {
	return(
		<footer className="w-full bg-[#B0A187] px-6 pt-6 pb-3 flex flex-row justify-between gap-4 rounded-t-3xl">
			csaladihazneked.hu © 2023
			<div className="flex flex-row gap-4">
				<Link href={"blog"}>Blog</Link>
				<Link href={"galeria"}>Galéria</Link>
				<Link href={""}>Elérhetőség</Link>
			</div>
		</footer>
	);
}
