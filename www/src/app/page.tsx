import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Subtitle, Title } from "@/components/general/Typography";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import EmailExtendedFooter from "@/components/extendedFooters/email";
import { getRandomBlueprint } from "@/lib/random";
import Link from "next/link";
import Markdown from "@/components/general/MarkDown";
import PostMedium from "@/components/blog/PostMedium";


export default async function Home() {
	const blueprints = await getBlueprints();

	return (
		<main className="flex flex-col pt-3">
			<Title className="text-xl md:text-6xl px-6">Csaladihazneked.hu</Title>
			<Subtitle className="px-6">Bemutatkozás</Subtitle>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{`A bejgli tésztájához a langyos tejben feloldjuk a porcukrot, majd az élesztőt felfuttatjuk benne.A vajat kis tálban felolvasztjuk. A lisztet tálba szitáljuk. Hozzáadjuk először az élesztős tejet és 2 db tojássárgáját, majd a vajat és a sót, végül a reszelt citromhéjat.
				![Lehet a kép mellé leírást tenni. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle.](/images/1.png "Alt")
				A tésztát jól összedolgozzuk: viszonylag kemény, rugalmas tésztát kell kapnunk. Meleg helyen pihentetjük, ameddig elkészítjük a töltelékeket. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle. A tölteléket kb. 1 cm vastagságban eloszlatjuk a tészta teljes felületén a széleken hagyva kb. 1 centi széles csíkot, majd óvatosan feltekerjük. A két rudat a tepsibe helyezzük, nem túl szorosan egymáshoz, hiszen a sütés közben még kelni fognak. A bejglik tetejét megkenjük a maradék tojássárgájával, amihez 1 kanál tejet is keverhetünk, hogy még szebb színe legyen. Húsvillával megszurkáljuk őket. 200 fokra előmelegített sütőben kb. 50-55 perc alatt szép aranybarnára sütjük a süteményeket.`}
			</Markdown>
			<Subtitle className="pt-4 px-6">Partnereink</Subtitle>
			<hr className="pb-4" />
			<div className="px-6 flex w-full justify-evenly gap-4">
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
			</div>
			<Subtitle className="pt-6 px-6">Legutóbbi híreink</Subtitle>
			<hr className="pb-4" />
			<div className="mx-6 grid grid-cols-5 gap-4">
				<PostMedium className="col-span-5 xl:col-span-4" post={{
					id: 0,
					title: "Harmadik bejegyzés",
					description: "Mi is ez itt?",
					imageURL: "",
					content: ""
				}} />
				<Card className="justify-between hidden xl:flex">
					<CardHeader>
						<CardTitle className="font-serif">
							<Balancer>Minden bejegyzés</Balancer>
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
			</div>
			<Subtitle className="pt-6 px-6">Kiemelt tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintMediumCarousel className={"px-6"} blueprints={ blueprints } />
			<div className="flex flex-col w-full justify-between items-baseline">
				<div className="w-full">
					<Subtitle className="pt-6 px-6" id="elerhetosegek">Elérhetőségek</Subtitle>
					<hr className="pb-4" />
				</div>
				<div className="px-6">
					<div className="flex sm:flex-row flex-col gap-x-4 pb-4 select-all">
						<div>
							<span className="font-bold">Tel.: </span>
							<Link href={"tel:+36302342037"}>+36 30 234 2037</Link>
						</div>
						<div>
							<span className="font-bold">Email: </span>
							<Link href={"mailto:hello@csaladihazneked.hu"}>
								hello@csaladihazneked.hu
							</Link>
						</div>
					</div>
				</div>
			</div>
			<EmailExtendedFooter />
		</main>
	);
}

async function getBlueprints() {
	const blueprints: Array<Blueprint> = [
		getRandomBlueprint(), getRandomBlueprint(), getRandomBlueprint(),
		getRandomBlueprint(), getRandomBlueprint(), getRandomBlueprint()
	];

	return blueprints;
}
