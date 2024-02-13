import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Featureset from "@/components/blueprint/Featureset";
import { getBlueprints } from "@/lib/filter_data";
import html2md from "@/lib/html2md";
import ImageCarousel from "@/components/general/ImageCarousel";
import Link from "next/link";
import { Mail } from "lucide-react";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";


type Params = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
  }

  export async function generateMetadata(
	{ params }: Params,
  ): Promise<Metadata> {
	const blueprint: Blueprint = ( await getBlueprints({slug: params.slug}) )[0];

	return {
		title: blueprint.title,
		description: blueprint.description
	};
}

/**
 * @param Object containing the slug from the URL and the slug of the blueprint to display.
 * @returns Page for /tervrajzok/**
 */

export default async function Page({params}: Params) {
	const blueprint: Blueprint = ( await getBlueprints({slug: params.slug}) )[0];
	const content = await html2md({html: blueprint.content});

	return(
		<main>
			<Subtitle className="pt-6 px-6 font-caprasimo font-normal">Tervrajz</Subtitle>
			<div className="flex justify-between">
			<Title className="px-6 font-serif font-bold">{ blueprint.title }</Title>
			<Subtitle className="pt-6 px-6">{ blueprint.subtitle }</Subtitle>
			</div>
			<hr className="pb-4" />
			<div className="grid grid-cols-5 gap-4 px-6">
				<ImageCarousel 
					images={[blueprint.highlightedPhoto, ...blueprint.images]} 
					className="col-span-5 lg:col-span-3"
				/>
				<Card className="col-span-5 lg:col-span-2 flex flex-col h-full justify-between">
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
				{ content }
			</Markdown>
			<Subtitle className="pt-6 px-6">Hasonló tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintMediumCarousel 
				blueprints={ [blueprint, blueprint, blueprint, blueprint, blueprint] }
				className="px-6"
			/>
		</main>
	);
}
