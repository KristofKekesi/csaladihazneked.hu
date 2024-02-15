import { Subtitle, Title } from "@/components/general/Typography";
import { Blueprint } from "@/types/Blueprint";
import BlueprintBigCarousel from "@/components/blueprint/BlueprintBigCarousel";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import { getAllBlueprints } from "@/lib/api";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Tervrajzok"
};

/**
 * @returns Page for /tervrajzok.
 */
export default async function Blueprints() {
	const blueprints: Array<Blueprint> = await getAllBlueprints();
	const highlightedBlueprints: Array<Blueprint> = 
		blueprints.filter((blueprint) => {
			return blueprint.isHighlighted;
		});
	const generalBlueprints: Array<Blueprint> = 
		blueprints.filter((blueprint) => {
			return !blueprint.isHighlighted;
		});

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6">Tervrajzok</Title>
			{ highlightedBlueprints.length !== 0 ? <>
				<Subtitle className="px-6">Kiemelt tervrajzok</Subtitle>
				<hr className="pb-4" />
				<BlueprintBigCarousel className="px-6" blueprints={ highlightedBlueprints } />
			</> : null}
			<Subtitle className="pt-6 px-6">Minden tervrajz</Subtitle>
			<hr className="pb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 pb-4 px-6">
				{ [...generalBlueprints, ...highlightedBlueprints].map((blueprint) => {
					return <BlueprintMedium blueprint={ blueprint } key={ blueprint.id } />;
				}) }
			</div>
		</main>
	);
}
