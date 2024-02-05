import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Featureset from "@/components/blueprint/Featureset";
import { getBlueprint } from "@/lib/filter_data";
import ImageCarousel from "@/components/general/ImageCarousel";
import Link from "next/link";
import { Mail } from "lucide-react";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";


type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
  }

  export async function generateMetadata(
	{ params }: Props,
  ): Promise<Metadata> {
	console.log(params.slug);
	const blueprint: Blueprint = await getBlueprint({slug: params.slug});

	return {
		title: blueprint.title,
		description: blueprint.description
	};
}


export default async function Page({params}: Props) {
	const blueprint: Blueprint = await getBlueprint({slug: params.slug});

	return(
		<main>
			<Subtitle className="pt-6 px-6">Tervrajz</Subtitle>
			<Title className="px-6">{ blueprint.title }</Title>
			<hr className="pb-4" />
			<div className="grid grid-cols-5 gap-4 px-6">
				<ImageCarousel 
					images={["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"]} 
					className="col-span-5 md:col-span-3"
				/>
				<Card className="col-span-5 md:col-span-2 flex flex-col h-full justify-between">
					<CardHeader className="flex flex-col">
						<CardTitle className={ cn(subtitleClassNames, "pb-4 px-0" ) }>
							<Balancer>Részletek</Balancer>
						</CardTitle>
						<CardContent className="grid grid-cols-2 xl:grid-cols-3 pl-0 gap-4">
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
						<span className={ subtitleClassNames }>
							{ `${Intl.NumberFormat("hu-HU").format(blueprint.price!)} Ft` }
						</span>
						<Link href="/#elerhetosegek">
							<Button>
								<Mail className="h-4 w-4 mr-2" /> Kapcsolat
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
			<Subtitle className="pt-6 px-6">Leírás</Subtitle>
			<hr className="pb-4" />
			<Markdown className="px-6">
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
			</Markdown>
			<Subtitle className="pt-6 px-6">Hasonló tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintMediumCarousel 
				blueprints={[blueprint, blueprint, blueprint, blueprint, blueprint]}
				className="px-6"
			/>
		</main>
	);
}
