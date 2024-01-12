import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import getRandomBlueprint from "@/lib/random";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import PostMedium from "@/components/blog/PostMedium";
import { Blueprint } from "@/types/Blueprint";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default async function Home() {
	const blueprints = await getBlueprints();

	return (
		<main className="flex flex-col pt-3">
			<h1 className="text-6xl font-caprasimo px-6">Csaladihazneked.hu</h1>
			<h1 className="text-2xl font-bold font-serif px-6">Bemutatkozás</h1>
			<hr className="pb-4" />
			<p className="px-6">A bejgli tésztájához a langyos tejben feloldjuk a porcukrot, majd az élesztőt felfuttatjuk benne. A vajat kis tálban felolvasztjuk. A lisztet tálba szitáljuk. Hozzáadjuk először az élesztős tejet és 2 db tojássárgáját, majd a vajat és a sót, végül a reszelt citromhéjat. A tésztát jól összedolgozzuk: viszonylag kemény, rugalmas tésztát kell kapnunk. Meleg helyen pihentetjük, ameddig elkészítjük a töltelékeket. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle. A tölteléket kb. 1 cm vastagságban eloszlatjuk a tészta teljes felületén a széleken hagyva kb. 1 centi széles csíkot, majd óvatosan feltekerjük. A két rudat a tepsibe helyezzük, nem túl szorosan egymáshoz, hiszen a sütés közben még kelni fognak. A bejglik tetejét megkenjük a maradék tojássárgájával, amihez 1 kanál tejet is keverhetünk, hogy még szebb színe legyen. Húsvillával megszurkáljuk őket. 200 fokra előmelegített sütőben kb. 50-55 perc alatt szép aranybarnára sütjük a süteményeket.</p>
			<h1 className="text-2xl font-bold font-serif px-6 pt-6">Partnereink</h1>
			<hr className="pb-4" />
			<div className="px-6 flex w-full justify-evenly gap-4">
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
				<div className="rounded-full bg-slate-100 w-32 h-32" />
			</div>
			<h1 className="text-2xl font-bold font-serif px-6 pt-6">Legutóbbi híreink</h1>
			<hr className="pb-4" />
			<div className="mx-6 grid grid-cols-5 gap-4">
				<PostMedium className="col-span-4" post={{
					id: 0,
					title: "Harmadik bejegyzés",
					description: "Mi is ez itt?",
					imageURL: "",
					content: ""
				}} />
				<Card className="flex justify-between">
					<CardHeader>
						<CardTitle className="font-serif">Minden bejegyzés</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Button variant={"secondary"}>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</CardFooter>
				</Card>
			</div>
			<h1 className="text-2xl font-bold font-serif px-6 pt-6">Kiemelt tervrajzok</h1>
			<hr className="pb-4" />
			<BlueprintMediumCarousel className={"px-6"} blueprints={ blueprints } />
			<div className="flex flex-col w-full justify-between items-baseline">
				<div className="w-full">
					<h1
						className="text-2xl font-bold font-serif px-6 pt-6 selected:text-red-300"
						id="elerhetosegek"
					>
						Elérhetőségek
					</h1>
					<hr className="pb-4" />
				</div>
				<div className="px-6">
					<div className="flex sm:flex-row flex-col gap-x-4 pb-4">
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
			<div className="mx-6 -mb-6 px-6 pt-6 pb-6 grid grid-cols-5 justify-between items-end gap-x-4 gap-y-2 rounded-t-3xl text-black/75 bg-[#BABEAE]">
				<div className="col-span-5 flex flex-col ml-2 mb-2">
					<h3 className="text-2xl font-bold font-serif">Email küldés</h3>
				</div>
				<div className="flex flex-col items-start col-span-2"><Label className="text-base font-normal ml-2" htmlFor="email">Emailcím:</Label><Input id="email" type="email" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors w-full" /></div>
				<div className="flex flex-col items-start col-span-2"><Label className="text-base font-normal ml-2" htmlFor="name">Név:</Label><Input id="name" type="text" autoComplete="username" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors w-full" /></div>
				<button type="submit" className="py-1 px-2 rounded-md bg-white hover:bg-white/80 transition-colors col-span-1 h-10">Küldés</button>
				<div className="flex flex-col items-start col-span-5 w-full"><Label className="text-base font-normal ml-2" htmlFor="message">Üzenet:</Label><Textarea id="message" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors resize-none h-fit file:border-0 file:bg-transparent file:text-sm file:font-medium" /></div>
			</div>
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
