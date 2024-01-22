import ExtendedFooter from "../general/footer/ExtendedFooter";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ForgottenPurchaseExtendedFooter() {
	return (
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
						transition-colors w-full select-auto" />
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
	);
}
