import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Index, Referencia } from "@/routes";
import { Subtitle, Title } from "@/components/general/Typography";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns A page to render on 404 errors.
 */
export default function Blueprints() {

	return (
		<main className="flex flex-col just pt-3">
			<Subtitle className="px-6">404</Subtitle>
			<Title className="px-6 z-30 text-xl sm:text-6xl">Nincs ilyen oldal</Title>
			<hr className="pb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6">
			<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Főoldal
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Index.Link>
							<Button variant="secondary">
								<ChevronRight className="size-4" />
							</Button>
						</Index.Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Referencia
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Referencia.Link>
							<Button variant="secondary">
								<ChevronRight className="size-4" />
							</Button>
						</Referencia.Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Legutóbbi tervrajzok
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Referencia.Link>
							<Button variant="secondary">
								<ChevronRight className="size-4" />
							</Button>
						</Referencia.Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Elérhetőségek
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Link href="/#elerhetosegek">
							<Button variant="secondary">
								<ChevronRight className="size-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
