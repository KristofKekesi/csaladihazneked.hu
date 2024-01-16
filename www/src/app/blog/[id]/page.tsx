import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Header, Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getRandomBlueprint from "@/lib/random";
import { cn } from "@/lib/utils";
import { Blueprint } from "@/types/Blueprint";
import { Balancer } from "react-wrap-balancer";

export default async function Page({ params }: { params: { id: string } }) {
	const post: Blueprint = await getPost(params.id);

	return(
		<main>
			<Subtitle value="2024/01/14" className="pt-6" />
			<Title value={ post.title } />
			<hr className="pb-4" />
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
			<Card className="col-span-5 md:col-span-2 flex
			flex-col h-full justify-between mx-6 mt-6">
				<CardHeader className="flex flex-col">
					<CardTitle className={ cn(subtitleClassNames, "pb-4 px-0") }>
						<Balancer>Részletek</Balancer>
					</CardTitle>
					<CardContent className="flex flex-col pl-0 gap-4">
						<p className="a text-lg font-semibold">Első bejegyzés</p>
						<p>Írta: Kékesi Kristóf</p>
						<p>2024/04/14</p>
						<Header value="Megemlített bejegyzések" className="p-0" />
						<Header value="Megemlített tervrajzok" className="p-0" />
						<Header value="Megemlített képek" className="p-0" />
					</CardContent>
				</CardHeader>
			</Card>
			<Subtitle value="Hasonló bejegyzések" className="pt-6" />
			<hr className="pb-4" />
			<BlueprintMediumCarousel 
				blueprints={[post, post, post, post, post]}
				className="px-6"
			/>
		</main>
	);
}

// eslint-disable-next-line no-unused-vars
async function getPost(id: string) {
	const post: Blueprint = getRandomBlueprint();

	return post;
}
