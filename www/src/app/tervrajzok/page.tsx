import BlueprintBig from "@/components/blueprint/BlueprintBig";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";

export default function Blueprints() {
	return (
	  <main className="flex flex-col just px-6 pt-3">
		<h1 className="text-2xl font-mono font-bold italic">Tervrajz shop</h1>
		<BlueprintBig blueprint={{id: 0, title: "Tervrajz 1. - Teszt", description: "Lorem ipsum.", imageURL: "", squarem: 45, type: 2}} />
		<div className="grid grid-cols-3 gap-4 pt-4">
			<BlueprintMedium blueprint={{id: 0, title: "Tervrajz 1. - Teszt", description: "Lorem ipsum.", imageURL: "", squarem: 45, type: 2}} />
			<BlueprintMedium blueprint={{id: 0, title: "Tervrajz 1. - Teszt", description: "Lorem ipsum.", imageURL: "", squarem: 45, type: 2}} />
			<BlueprintMedium blueprint={{id: 0, title: "Tervrajz 1. - Teszt", description: "Lorem ipsum.", imageURL: "", squarem: 45, type: 2}} />
		</div>
	  </main>
	)
  }
  