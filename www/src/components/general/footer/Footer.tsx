import { Aszf, Index, Referencia, Tervrajzok } from "@/routes";
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
export default function Footer(): JSX.Element {
	return(
		<footer className="w-full bg-customBrown pt-6 pb-3
		rounded-t-3xl text-black/75 flex flex-col gap-4">
			<div className="flex flex-row justify-between gap-4 px-6">
				<div className="flex flex-col sm:flex-row gap-2">
					<Index.Link className="hover:text-black/50 transition-colors">
						csaladihazneked.hu
					</Index.Link>
					<Aszf.Link className="inline sm:hidden hover:text-black/50 transition-colors">
						<span className="hidden sm:inline">Általános Szerződési Feltételek</span>
						<span className="inline sm:hidden">ÁSZF</span>
					</Aszf.Link>
				</div>
				<div className="flex flex-col sm:flex-row justify-between gap-2">
					<div className="flex flex-col sm:flex-row gap-4 items-end">
						<Referencia.Link className="hover:text-black/50 transition-colors">
							Referencia
						</Referencia.Link>
						<Link href="/#elerhetosegek"
							className="hover:text-black/50 transition-colors hidden sm:inline"
						>
							Elérhetőség
						</Link>
						<Tervrajzok.Link className="hover:text-black/50 transition-colors">
							Tervrajzok
						</Tervrajzok.Link>
						<Link href="/#elerhetosegek"
							className="hover:text-black/50 transition-colors inline sm:hidden"
						>
							Elérhetőség
						</Link>
					</div>
				</div>
			</div>
			<Separator orientation="horizontal" className="bg-black/25" />
			<div className="px-6 flex justify-center sm:justify-between">
				<Aszf.Link
					className="hidden sm:inline hover:text-black/50 transition-colors"
				>
					Általános Szerződési Feltételek
				</Aszf.Link>
				<Link href="https://www.kekesi.dev"
					className="hover:text-black/50 transition-colors"
				>
					Készítette Kékesi Kristóf
				</Link>
			</div>
		</footer>
	);
}
