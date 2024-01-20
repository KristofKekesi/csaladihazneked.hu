import BlueprintBigCarousel from "@/components/blueprint/BlueprintBigCarousel";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import ExtendedFooter from "@/components/footer/ExtendedFooter";
import { Subtitle, Title } from "@/components/general/Typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import getRandomBlueprint from "@/lib/random";
import { Blueprint } from "@/types/Blueprint";


export default async function Blueprints() {
	const blueprints: Array<Blueprint> = await getBlueprints();

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6">Tervrajzok</Title>
			<Subtitle className="px-6">Kiemelt tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintBigCarousel className="px-6" blueprints={ blueprints } />
			<h1 className="text-2xl font-bold font-serif pt-6 px-6">Minden tervrajz</h1>
			<Subtitle className="pt-6 px-6">Minden tervrajz</Subtitle>
			<hr className="pb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 pb-4 px-6">
				{ blueprints.map((blueprint) => {
					return <BlueprintMedium blueprint={blueprint} key={blueprint.id} />;
				}) }
			</div>
			<ExtendedFooter
				title="Nem találod az emailt a megvásárolt tervrajzaiddal?"
				description="Az emailcímed alapján kikeressük melyik tervrajzokat 
				vetted meg, majd újból elküldjük neked. Azt az emailcímed add meg 
				amelyikkel korábban már vásároltál."
			>
				<>
					<div className="flex flex-col items-start col-span-5 md:col-span-4">
						<Label className="text-base font-normal ml-2" htmlFor="email">
							Emailcím:
						</Label>
						<Input
							id="email"
							type="email"
							className="bg-white/40 focus:bg-white/20 hover:bg-white/30 
							border-2 border-dashed focus:border-white border-transparent 
							transition-colors w-full" />
					</div>
					<button
						type="submit"
						className="py-1 px-2 rounded-md bg-white hover:bg-white/80 
						transition-colors col-span-3 md:col-span-1 col-start-3 h-10"
					>
						Lekérés
					</button>
				</>
			</ExtendedFooter>
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
