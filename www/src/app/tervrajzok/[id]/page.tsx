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
			<div className="flex justify-between">
			<Title className="px-6">{ blueprint.title }</Title>
			<Subtitle className="pt-6 px-6">{ blueprint.subtitle }</Subtitle>
			</div>
			<hr className="pb-4" />
			<div className="grid grid-cols-5 gap-4 px-6">
				<ImageCarousel 
					images={[blueprint.imageURL, ...blueprint.images]} 
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
				{ blueprint.content }
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
