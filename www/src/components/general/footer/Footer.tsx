import Link from "next/link";
import { Separator } from "@/components/ui/Separator";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A general footer component.
 * @returns The footer for the website.
 */
export default function Footer() {
	return(
		<footer className="w-full bg-customBrown pt-6 pb-3
		rounded-t-3xl text-black/75 flex flex-col gap-4">
			<div className="flex flex-row justify-between gap-4 px-6">
				<div className="flex flex-col sm:flex-row justify-between gap-2">
					<Link className="hover:text-black/50 transition-colors" href="/">
						csaladihazneked.hu
					</Link> 
					<Link
						className="inline sm:hidden hover:text-black/50 transition-colors"
						href="/aszf"
					>
						Általános Szerződési Feltételek
					</Link>
				</div>
				<div className="flex flex-row gap-4">
					<div className="flex flex-col sm:flex-row gap-4 items-end">
						<Link
							className="hover:text-black/50 transition-colors"
							href="/referencia"
						>
							Referencia
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
			</div>
			<Separator orientation="horizontal" className="bg-black/25" />
			<div className="px-6 flex justify-center sm:justify-between">
				<Link
					className="hidden sm:inline hover:text-black/50 transition-colors"
					href="/aszf"
				>
					Általános Szerződési Feltételek
				</Link>
				<Link
					href="https://www.kekesi.dev"
					className="hover:text-black/50 transition-colors"
				>
					Készítette Kékesi Kristóf
				</Link>
			</div>
		</footer>
	);
}
