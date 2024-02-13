import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Subtitle, Title } from "@/components/general/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
							Legutóbbi híreink
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Link href="/blog">
							<Button variant={"secondary"}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Legutóbbi tervrajzok
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Link href="/tervrajzok">
							<Button variant={"secondary"}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex">
					<CardHeader>
						<CardTitle className="font-serif">
							Galéria
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Link href="/galeria">
							<Button variant={"secondary"}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
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
							<Button variant={"secondary"}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
				<Card className="justify-between items-baseline flex md:col-span-2">
					<CardHeader>
						<CardTitle className="font-serif">
							Közösségi média
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end gap-4">
						<Button variant={"secondary"}>
							<Instagram className="h-4 w-4" />
						</Button>
						<Button variant={"secondary"}>
							<Facebook className="h-4 w-4" />
						</Button>
						<Button variant={"secondary"}>
							<Youtube className="h-4 w-4" />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
