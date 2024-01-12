import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Building, ChevronRight, Factory, Home, Layers, Store } from "lucide-react";
import Featureset from "./Featureset";
import Link from "next/link";
import { Blueprint } from "@/types/Blueprint";

const IMG = "https://damassets.autodesk.net/content/" +
"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg";

export default function BlueprintBig(props: {blueprint: Blueprint}) {
	return (
		<Card className="flex rounded-t-3xl">
			<div className="w-2/3">
				<CardHeader className="backdrop-blur-2xl bg-black/5 rounded-tl-3xl">
					<CardTitle className="flex justify-between items-baseline">
						<span>{props.blueprint.title}</span>
						<span className="text-lg">{props.blueprint.price} Ft;</span>
					</CardTitle>
					<CardDescription>{props.blueprint.description}</CardDescription>
				</CardHeader>
				<CardContent className="pt-6 grid grid-cols-3">
					<ul className="col-span-1">
						<li className="flex items-baseline">
							{ props.blueprint.type === "Bolt" ?
							<Store className="h-4 w-4 mr-2" /> : null }
							{ props.blueprint.type === "Családihaz" ?
							<Home className="h-4 w-4 mr-2" /> : null }
							{ props.blueprint.type === "Ipar" ?
							<Factory className="h-4 w-4 mr-2" /> : null }
							{ props.blueprint.type === "Lakás" ?
							<Building className="h-4 w-4 mr-2" /> : null }
							{ props.blueprint.type }
						</li>
						<li className="flex items-baseline">
							<Box className="h-4 w-4 mr-2" />85 m<sup>2</sup>
						</li>
						<li className="flex items-baseline">
							<Layers className="h-4 w-4 mr-2" />{ props.blueprint.floors } emelet
						</li>
					</ul>
					<Featureset blueprint={props.blueprint} type={"rooms"} maxReturn={4} />
					<ul className="col-span-1">
						<li>Amerikai konyha</li>
						<li>Spájz</li>
						<li>Biciklitároló</li>
						<li>Padlás</li>
					</ul>
				</CardContent>
				<CardFooter className="flex justify-between pt-6">
					<Button variant={"link"}>Hasonló tervrajzok</Button>
					<Link href={`./tervrajzok/${props.blueprint.id}`}>
						<Button>
							Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
						</Button>
					</Link>
				</CardFooter>
			</div>
			<div
				className="w-1/3 rounded-tr-3xl"
				style={{backgroundImage: `url(${IMG})`}}
			/>
		</Card>
	);
}
