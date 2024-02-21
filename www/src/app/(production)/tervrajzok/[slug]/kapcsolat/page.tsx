import { Subtitle, Title } from "@/components/general/Typography";
import { Blueprint } from "@/types/Blueprint";
import BlueprintBigCarousel from "@/components/blueprint/BlueprintBigCarousel";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import { getBlueprints } from "@/lib/filter_data";
import { Metadata } from "next";
import EmailExtendedFooter from "@/components/extendedFooters/Email";
import BlueprintEmailExtendedFooter from "@/components/extendedFooters/BlueprintEmail";
import { Separator } from "@/components/ui/Separator";
import BlueprintBig from "@/components/blueprint/BlueprintBig";

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
 * @returns Page for /tervrajzok/slug.
 */
export default async function Page({ params }: Params) {
	const blueprint: Blueprint = ( await getBlueprints({ slug: params.slug }) )[0];

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6">Kapcsolat</Title>
			<Subtitle className="px-6">{ blueprint.title }</Subtitle>
			<Separator className="mb-4" />
			<BlueprintEmailExtendedFooter blueprint={ blueprint } className="rounded-3xl mb-4" />
			<div className="px-6">
				<BlueprintBig blueprint={ blueprint } />
			</div>
		</main>
	);
}
