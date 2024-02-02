import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRandomBlueprint, getRandomPost } from "@/lib/random";
import { Header, Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import { Balancer } from "react-wrap-balancer";
import BlueprintSmall from "@/components/blueprint/BlueprintSmall";
import { cn } from "@/lib/utils";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";
import { Post } from "@/types/Post";
import PostMediumCarousel from "@/components/blog/PostMediumCarousel";
import PostSmall from "@/components/blog/PostSmall";


type Props = {
	params: { id: number }
	searchParams: { [key: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata(
	{ params }: Props
  ): Promise<Metadata> {
	const post: Post = await getRandomPost(params.id);

	return {
		title: post.title,
		description: post.description
	};
}


export default async function Page({ params }: Props) {
	const post: Post = await getPost(params.id);

	return(
		<main>
			<Subtitle className="pt-6 px-6">2024/01/14</Subtitle>
			<Title className="px-6">{ post.title }</Title>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{`A bejgli tésztájához a langyos tejben feloldjuk a porcukrot, majd az élesztőt felfuttatjuk benne.A vajat kis tálban felolvasztjuk. A lisztet tálba szitáljuk. Hozzáadjuk először az élesztős tejet és 2 db tojássárgáját, majd a vajat és a sót, végül a reszelt citromhéjat. A tésztát jól összedolgozzuk: viszonylag kemény, rugalmas tésztát kell kapnunk. Meleg helyen pihentetjük, ameddig elkészítjük a töltelékeket. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle. A tölteléket kb. 1 cm vastagságban eloszlatjuk a tészta teljes felületén a széleken hagyva kb. 1 centi széles csíkot, majd óvatosan feltekerjük. A két rudat a tepsibe helyezzük, nem túl szorosan egymáshoz, hiszen a sütés közben még kelni fognak. A bejglik tetejét megkenjük a maradék tojássárgájával, amihez 1 kanál tejet is keverhetünk, hogy még szebb színe legyen. Húsvillával megszurkáljuk őket. 200 fokra előmelegített sütőben kb. 50-55 perc alatt szép aranybarnára sütjük a süteményeket.
				![Lehet a kép mellé leírást tenni. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle.](/images/1.png "Alt")
				![Lehet a kép mellé leírást tenni. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle.](/images/2.png "Alt")
				A tésztát jól összedolgozzuk: viszonylag kemény, rugalmas tésztát kell kapnunk. Meleg helyen pihentetjük, ameddig elkészítjük a töltelékeket. A darált diót és darált mákot külön tálba rakjuk, és összekeverjük 10-10 dkg cukorral és 1-1 dl tejjel. A vaníliáscukrot szintén kétfelé osztjuk, és a töltelékekhez keverjük. Ha szeretjük, keverhetünk bele mazsolát és reszelt citromhéjat is. A megkelt tésztát 2 részre osztjuk, és gáztepsi méretű téglalapokat nyújtunk belőle. A tölteléket kb. 1 cm vastagságban eloszlatjuk a tészta teljes felületén a széleken hagyva kb. 1 centi széles csíkot, majd óvatosan feltekerjük. A két rudat a tepsibe helyezzük, nem túl szorosan egymáshoz, hiszen a sütés közben még kelni fognak. A bejglik tetejét megkenjük a maradék tojássárgájával, amihez 1 kanál tejet is keverhetünk, hogy még szebb színe legyen. Húsvillával megszurkáljuk őket. 200 fokra előmelegített sütőben kb. 50-55 perc alatt szép aranybarnára sütjük a süteményeket.`}
			</Markdown>
			<Card className="col-span-5 md:col-span-2 flex
			flex-col h-full justify-between mx-6 mt-6 rounded-b-[48px]">
				<CardHeader className="flex flex-col">
					<CardTitle className={ cn(subtitleClassNames, "pb-4 px-0") }>
						<Balancer>Részletek</Balancer>
					</CardTitle>
					<CardContent className="flex flex-col pl-0 pb-0 gap-4">
						<div className="flex flex-col select-auto">
							<p className="text-lg font-semibold">
								Első bejegyzés
								<span className="pl-4 text-base font-normal">(2024/04/14)</span>
							</p>
							<p>Írta: Kékesi Kristóf</p>
						</div>
						<div>
							<Header className="p-0 pl-6">Megemlített bejegyzések</Header>
							<div className="flex flex-wrap gap-4 w-full ">
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
							</div>
						</div>
						<div>
							<Header className="p-0 pl-6">Megemlített tervrajzok</Header>
							<div className="flex flex-wrap gap-4 w-full ">
								<BlueprintSmall blueprint={ getRandomBlueprint() } />
								<BlueprintSmall blueprint={ getRandomBlueprint() } />
								<BlueprintSmall blueprint={ getRandomBlueprint() } />
								<BlueprintSmall blueprint={ getRandomBlueprint() } />
								<BlueprintSmall blueprint={ getRandomBlueprint() } />
							</div>
						</div>
					</CardContent>
				</CardHeader>
			</Card>
			<Subtitle className="pt-6 px-6">Hasonló bejegyzések</Subtitle>
			<hr className="pb-4" />
			<PostMediumCarousel 
				posts={[post, post, post, post, post]}
				className="px-6"
			/>
		</main>
	);
}

// eslint-disable-next-line no-unused-vars
async function getPost(id: number) {
	const post: Post = getRandomPost(id);

	return post;
}
