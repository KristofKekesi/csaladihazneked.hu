import { Subtitle, Title } from "@/components/general/Typography";
import { Blueprint } from "@/types/Blueprint";
import BlueprintBigCarousel from "@/components/blueprint/BlueprintBigCarousel";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import { getRandomBlueprint } from "@/lib/random";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Tervrajzok"
};


export default async function Blueprints() {
	const blueprints: Array<Blueprint> = await getBlueprints();

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6">Tervrajzok</Title>
			<Subtitle className="px-6">Kiemelt tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintBigCarousel className="px-6" blueprints={ blueprints } />
			<Subtitle className="pt-6 px-6">Minden tervrajz</Subtitle>
			<hr className="pb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 pb-4 px-6">
				{ blueprints.map((blueprint) => {
					return <BlueprintMedium blueprint={blueprint} key={blueprint.id} />;
				}) }
			</div>
		</main>
	);
}

async function getBlueprints() {
	const blueprints: Array<Blueprint> = [
		getRandomBlueprint(), getRandomBlueprint(), getRandomBlueprint(),
		getRandomBlueprint(), getRandomBlueprint(), getRandomBlueprint()
	];

	return blueprints;
}
