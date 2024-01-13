import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import Featureset from "@/components/blueprint/Featureset";
import ImageCarousel from "@/components/general/ImageCarousel";
import { Subtitle, Title } from "@/components/general/Typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import getRandomBlueprint from "@/lib/random";
import { Blueprint } from "@/types/Blueprint";
import { Mail, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
	const blueprint: Blueprint = await getBlueprint(params.id);

	return(
		<main>
			<Subtitle value="Gárdony" className="pt-6" />
			<Title value={ blueprint.title } />
			<hr className="pb-4" />
			<div className="grid grid-cols-5 gap-4 px-6">
				<ImageCarousel 
					images={["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"]} 
					className="col-span-5 md:col-span-3"
				/>
				<Card className="col-span-5 md:col-span-2 flex flex-col h-full justify-between">
					<CardHeader className="flex flex-col">
						<CardTitle>
							<Subtitle value="Részletek" className="pb-4 px-0" />
						</CardTitle>
						<CardContent className="grid grid-cols-2 lg:grid-cols-3 pl-0">
							<Featureset blueprint={blueprint} type="general" />
							<Featureset blueprint={blueprint} type="rooms" />
							<Featureset 
								blueprint={blueprint}
								type="features"
								className="col-span-2 lg:col-span-1 marker:bg-red-50"
							/>
						</CardContent>
					</CardHeader>
					<CardFooter className="flex flex-col items-end gap-4">
						{ `${blueprint.price} Ft` }
						<div className="flex justify-end gap-4">
							<Button variant="secondary">
								<Mail className="h-4 w-4 mr-2" />
								Kapcsolat
							</Button>
							<Link href="https://buy.stripe.com/test_4gw5kT6Xq5Sr9wI288">
								<Button>
									<ShoppingCart className="h-4 w-4 mr-2" /> Vásárlás
								</Button>
							</Link>
						</div>
					</CardFooter>
				</Card>
			</div>
			<Subtitle value="Leírás" className="pt-6" />
			<hr className="pb-4" />
			<p className="px-6">
				A bejgli tésztájához a langyos tejben feloldjuk a porcukrot, majd az
				élesztőt felfuttatjuk benne.A vajat kis tálban felolvasztjuk. A lisztet
				tálba szitáljuk. Hozzáadjuk először az élesztős tejet és 2 db tojássárgáját,
				majd a vajat és a sót, végül a reszelt citromhéjat. A tésztát jól összedolgozzuk:
				viszonylag kemény, rugalmas tésztát kell kapnunk. Meleg helyen pihentetjük,
				ameddig elkészítjük a töltelékeket. A darált diót és darált mákot külön tálba
				rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot
				szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele
				mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi
				méretű téglalapokat nyújtunk belőle. A tölteléket kb. 1 cm vastagságban eloszlatjuk
				a tészta teljes felületén a széleken hagyva kb. 1 centi széles csíkot, majd óvatosan
				feltekerjük. A két rudat a tepsibe helyezzük, nem túl szorosan egymáshoz, hiszen a
				sütés közben még kelni fognak. A bejglik tetejét megkenjük a maradék
				tojássárgájával, amihez 1 kanál tejet is keverhetünk, hogy még szebb színe legyen.
				Húsvillával megszurkáljuk őket. 200 fokra előmelegített sütőben kb. 50-55
				perc alatt szép aranybarnára sütjük a süteményeket.
			</p>
			<Subtitle value="Hasonló tervrajzok" className="pt-6" />
			<hr className="pb-4" />
			<BlueprintMediumCarousel 
				blueprints={[blueprint, blueprint, blueprint, blueprint, blueprint]}
				className="px-6"
			/>
		</main>
	);
}

// eslint-disable-next-line no-unused-vars
async function getBlueprint(id: string) {
	const blueprint: Blueprint = getRandomBlueprint();

	return blueprint;
}
