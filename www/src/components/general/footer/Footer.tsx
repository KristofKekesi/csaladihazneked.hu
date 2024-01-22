import Link from "next/link";
import { Separator } from "../../ui/separator";

export default function Footer() {
	return(
		<footer className="w-full bg-customBrown px-6 pt-6 pb-3 flex flex-row
		justify-between gap-4 rounded-t-3xl text-black/75">
			<div className="flex flex-col sm:flex-row justify-between">
				<p>
					<Link className="hover:text-black/50 transition-colors" href="/">
						csaladihazneked.hu
					</Link> 
					<span className="hidden sm:inline">© 2023</span>
				</p>
				<Link 
					className="inline sm:hidden hover:text-black/50 transition-colors text-sm mt-2"
					href="https://www.kekesi.dev"
				>
					Készítette: <span className="whitespace-nowrap text-base">Kékesi Kristóf</span>
				</Link>
			</div>
			<div className="flex flex-row gap-4">
				<div className="flex flex-col sm:flex-row gap-4 items-end">
					<Link
						className="hover:text-black/50 transition-colors"
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className="hover:text-black/50 transition-colors"
						href="/galeria"
					>
						Galéria
					</Link>
				</div>
				<Link
					className="hover:text-black/50 transition-colors hidden sm:inline"
					href="/#elerhetosegek"
				>
					Elérhetőség
				</Link>
				<Separator orientation="vertical" className="bg-black/50" />
				<div className="flex flex-col sm:flex-row gap-4">
					<Link
						className="hover:text-black/50 transition-colors"
						href="/tervrajzok"
					>
						Tervrajzok
					</Link>
					<Link
						className="hover:text-black/50 transition-colors inline sm:hidden"
						href="/#elerhetosegek"
					>
						Elérhetőség
					</Link>
				</div>
			</div>
		</footer>
	);
}
