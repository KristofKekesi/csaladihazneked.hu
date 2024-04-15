import { Index, Referencia, Tervrajzok } from "@/routes";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A general header component.
 * @returns The header for the website.
 */
export default function Header() {
	return(
		<>
			<header className="flex flex-col text-black/75 sticky top-0 z-30">
				<div className="flex flex-row justify-between gap-4 px-6 py-3 bg-customGreen">
					<Index.Link className="hover:text-black/50 transition-colors">
						<span className="hidden sm:inline">csaladihazneked.hu</span>
						<span className="inline sm:hidden">Home</span>
					</Index.Link>
					<div className="flex flex-row gap-4">
						<Referencia.Link className="hover:text-black/50 transition-colors">
							Referencia
						</Referencia.Link>
						<Link
							className="hover:text-black/50 transition-colors hidden sm:inline"
							href="/#elerhetosegek"
						>
							Elérhetőség
						</Link>
						<Separator orientation="vertical" className="bg-black/50" />
						<Tervrajzok.Link className="hover:text-black/50 transition-colors">
							Tervrajzok
						</Tervrajzok.Link>
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
