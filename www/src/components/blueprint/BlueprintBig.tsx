import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, ChevronRight, Cuboid, DoorClosed, Fan, Home, Layers, MoreHorizontal, Plus, ShowerHead, Sofa } from "lucide-react";

export default function BlueprintBig(props: {blueprint: Blueprint}) {
	return (
		<Card className="flex">
			<div className="w-2/3">
				<CardHeader className="backdrop-blur-2xl bg-black/5">
					<CardTitle className="flex justify-between items-baseline"><span>{props.blueprint.title}</span><span className="text-lg">79.000 Ft;</span></CardTitle>
					<CardDescription>{props.blueprint.description}</CardDescription>
				</CardHeader>
				<CardContent className="pt-6 grid grid-cols-3">
					<ul className="col-span-1">
						<li className="flex items-baseline"><Home className="h-4 w-4 mr-2" /> Családiház</li>
						<li className="flex items-baseline"><Box className="h-4 w-4 mr-2" />85 m<sup>2</sup></li>
						<li className="flex items-baseline"><Layers className="h-4 w-4 mr-2" />2 emelet</li>
					</ul>
					<ul className="col-span-1">
						<li className="flex items-baseline"><Cuboid className="h-4 w-4 mr-2" />4 szoba</li>
						<li className="flex items-baseline"><Sofa className="h-4 w-4 mr-2" />1 nappali</li>
						<li className="flex items-baseline"><ShowerHead className="h-4 w-4 mr-2" />2 fürdő</li>
						<li className="flex items-baseline"><Fan className="h-4 w-4 mr-2" />3 mosdó</li>
					</ul>
					<ul className="col-span-1">
						<li>Amerikai konyha</li>
						<li>Spájz</li>
						<li>Biciklitároló</li>
						<li>Padlás</li>
					</ul>
				</CardContent>
				<CardFooter className="flex justify-between pt-6">
					<Button variant={"link"}>Hasonló tervrajzok</Button>
					<Button>Olvass tovább <ChevronRight className="h-4 w-4 ml-2" /></Button>
				</CardFooter>
			</div>
			<div className="w-1/3" style={{backgroundImage: "url(https://damassets.autodesk.net/content/dam/autodesk/www/solutions/generative-design/fy22/images/blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg)"}}></div>
		</Card>
	);
}