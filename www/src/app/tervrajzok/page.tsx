"use client";

import BlueprintBigCarousel from "@/components/blueprint/BlueprintBigCarousel";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import ExtendedFooter from "@/components/footer/ExtendedFooter";
import { Button } from "@/components/ui/button";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const blueprint: Blueprint = {
	id: 0,
	title: "Teszt Tervrajz",
	imageURL: "",
	type: 2,
	squarem: 129,
	floors: 1
}

export default function Blueprints() {
	return (
	  <main className="flex flex-col just px-6 pt-3">
		<h1 className="text-2xl font-mono font-bold italic">Tervrajz shop</h1>
		<BlueprintBigCarousel />
		<div className="grid grid-cols-3 gap-4 pt-4">
			<BlueprintMedium blueprint={blueprint} />
			<BlueprintMedium blueprint={blueprint} />
			<BlueprintMedium blueprint={blueprint} />
		</div>
		<ExtendedFooter>
			<div className="w-full">
				<CardHeader>
					<CardTitle>Nem találod az emailt a megvásárolt tervrajzaiddal?</CardTitle>
					<CardDescription>Az emailcímed alapján kikeressük melyik tervrajzokat vetted meg, majd újból elküldjük neked. Azt az emailcímed add meg amelyikkel vásároltál.</CardDescription>
				</CardHeader>
				<CardFooter className="grid grid-cols-2 justify-between text-black/75 items-end gap-x-4 gap-y-2 w-full">
					<div className="flex flex-col items-start col-span-1"><Label className="text-base font-normal ml-2" htmlFor="email">Emailcím:</Label><Input id="email" type="email" className="bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed focus:border-white border-transparent transition-colors w-full" /></div>
					<button type="submit" className="py-1 px-2 rounded-md bg-white hover:bg-white/80 transition-colors col-span-1 h-10">Vásárlások lekérése</button>
				</CardFooter>
			</div>
		</ExtendedFooter>
	  </main>
	)
  }
  