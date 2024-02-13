import Link from "next/link";

import { Separator } from "../../ui/separator";

export default function Header() {
	return(
		<>
			<header className="flex flex-col text-black/75 sticky top-0 z-30">
				<div className="flex flex-row justify-between gap-4 px-6 py-3 bg-customGreen">
				<Link className="hover:text-black/50 transition-colors" href="/">
					<span className="hidden sm:inline">csaladihazneked.hu</span>
					<span className="inline sm:hidden">Home</span>
				</Link>
					<div className="flex flex-row gap-4">
					<Link className="hover:text-black/50 transition-colors" href="/galeria">
						Galéria
					</Link>
					<Link
						className="hover:text-black/50 transition-colors hidden sm:inline"
						href="/#elerhetosegek"
					>
						Elérhetőség
					</Link>
					<Separator orientation="vertical" className="bg-black/50" />
					<Link
						className="hover:text-black/50 transition-colors"
						href="/tervrajzok"
					>
						Tervrajzok
					</Link>
					</div>
				</div>
				<div className="w-full flex justify-between">
					<div className="bg-customGreen h-6 w-6">
						<div className="w-full h-full bg-white rounded-tl-3xl" />
					</div>
					<div className="bg-customGreen h-6 w-6">
						<div className="w-full h-full bg-white rounded-tr-3xl" />
					</div>
				</div>
			</header>
			<div className="bg-customGreen">
			</div>
		</>
	);
}
