import { Subtitle, Title } from "@/components/general/Typography";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import { getBlueprints } from "@/lib/filter_data";
import getSimilarBlueprints from "@/lib/similar_blueprints";
import { Metadata } from "next";
import { Separator } from "@/components/ui/Separator";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
	title: "Hasonlóak"
};

/**
 * @returns Page for /tervrajzok/[slug]/hasonloak.
 */
export default async function SimilarBlueprints({params}: Params): Promise<JSX.Element> {
	const blueprint: Blueprint = ( await getBlueprints({ slug: params.slug }))[0];
	const similarBlueprints: Array<Blueprint> =
		await getSimilarBlueprints({ blueprint, limit: 
			parseInt(process.env.WEBSITE_SIMILAR_BLUEPRINT_PAGE_LIMIT ?? "18") });

	return (
		<main className="flex flex-col just pt-3">
			<Title className="text-xl md:text-6xl px-6 pb-2">Hasonló tervrajzok</Title>
			<Subtitle className="px-6">{ blueprint.title }</Subtitle>
			<Separator className="mb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 pb-4 px-6">
				{ similarBlueprints.map((blueprint) => {
					return <BlueprintMedium blueprint={ blueprint } key={ blueprint.id } />;
				}) }
			</div>
		</main>
	);
}
