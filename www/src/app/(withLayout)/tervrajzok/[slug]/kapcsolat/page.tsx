import { Subtitle, Title } from "@/components/general/Typography";
import { Blueprint } from "@/types/Blueprint";
import BlueprintBig from "@/components/blueprint/BlueprintBig";
import BlueprintEmailExtendedFooter from "@/components/extendedFooters/BlueprintEmail";
import { getBlueprints } from "@/lib/filter_data";
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
	title: "Kapcsolat"
};

/**
 * @returns Page for /tervrajzok/slug/kapcsolat.
 */
export default async function AboutBlueprint({ params }: Params): Promise<JSX.Element> {
	const blueprint: Blueprint = ( await getBlueprints({ slug: params.slug }) )[0];

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6 pb-2">Kapcsolat</Title>
			<Subtitle className="px-6">{ blueprint.title }</Subtitle>
			<Separator className="mb-4" />
			<BlueprintEmailExtendedFooter blueprint={ blueprint } className="rounded-3xl mb-4" />
			<div className="px-6">
				<BlueprintBig blueprint={ blueprint } />
			</div>
		</main>
	);
}
