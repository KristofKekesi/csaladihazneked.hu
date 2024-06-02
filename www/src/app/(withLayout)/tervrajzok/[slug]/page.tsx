import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import { TervrajzokSlugHasonloak, TervrajzokSlugKapcsolat } from "@/routes";
import Balancer from "react-wrap-balancer";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Featureset from "@/components/blueprint/Featureset";
import { getBlueprints } from "@/lib/filter_data";
import getSimilarBlueprints from "@/lib/similar_blueprints";
import html2md from "@/lib/html2md";
import ImageCarousel from "@/components/general/ImageCarousel";
import { Mail } from "lucide-react";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";
import { notFound } from "next/navigation";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

/**
 * Generate dynamic metadata.
 * @param params 
 * @param searchParams 
 * @returns The metadata generated for a specific slug.
 */
export async function generateMetadata(
	{ params }: Params,
): Promise<Metadata> {
	const blueprint: Blueprint = ( await getBlueprints({ slug: params.slug }) )[0];
	if ( !blueprint ) { notFound(); }

	return {
		title: blueprint.title,
		description: blueprint.description
	};
}

/**
 * @param Object containing the slug from the URL and the slug of the blueprint to display.
 * @returns Page for /tervrajzok/slug
 */
export default async function Page({ params }: Params): Promise<JSX.Element> {
	const blueprint: Blueprint = ( await getBlueprints({ slug: params.slug }) )[0];
	if ( !blueprint ) { notFound(); }

	const similarBlueprints: Array<Blueprint> =
		( await getSimilarBlueprints({ blueprint, limit: 10 }) ).splice(0, 10);

	return(
		<main>
			<Subtitle className="pt-6 px-6 font-caprasimo font-normal">Tervrajz</Subtitle>
			<div className="flex justify-between items-baseline">
			<Title className="px-6 font-serif font-bold text-3xl md:text-6xl">
				{ blueprint.title }
			</Title>
			<Subtitle className="px-6">{ blueprint.subtitle }</Subtitle>
			</div>
			<hr className="pb-4" />
			<div className="grid grid-cols-5 gap-4 px-6">
				<ImageCarousel 
					images={ blueprint.youtubeVideoURL ?
						[blueprint.highlightedImage, blueprint.youtubeVideoURL, ...blueprint.images]
						 :
						[blueprint.highlightedImage, ...blueprint.images]
					} 
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
						<div className="flex gap-4 justify-between w-full">
							<TervrajzokSlugHasonloak.Link slug={ blueprint.slug } >
								<Button variant="link">
									Hasonló tervrajzok
								</Button>
							</TervrajzokSlugHasonloak.Link>
							<TervrajzokSlugKapcsolat.Link slug={ blueprint.slug }>
								<Button>
									<Mail className="size-4 mr-2" /> Kapcsolat
								</Button>
							</TervrajzokSlugKapcsolat.Link>
						</div>
					</CardFooter>
				</Card>
			</div>
			{ blueprint.content ? <>
					<Subtitle className="pt-6 px-6">Leírás</Subtitle>
					<hr className="pb-4" />
					<Markdown className="px-6">
						{ await html2md({html: blueprint.content}) }
					</Markdown>
			</> : null}
			<Subtitle className="pt-6 px-6">Hasonló tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintMediumCarousel 
				blueprints={ similarBlueprints }
				className="px-6"
			/>
		</main>
	);
}
