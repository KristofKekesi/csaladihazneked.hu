import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, ChevronRight, Cuboid, DoorClosed, Fan, Home, Layers, MoreHorizontal, MousePointer2, Plus, ShowerHead, Sofa } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlueprintMedium(props: {blueprint: Blueprint}) {
	return (
		<Card className="group" style={{backgroundImage: "url(https://damassets.autodesk.net/content/dam/autodesk/www/solutions/generative-design/fy22/images/blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg)"}}>
			<CardHeader className="flex flex-col justify-between aspect-video backdrop-blur-2xl group-hover:backdrop-blur-none bg-black/10 group-hover:bg-transparent transition-all" >
				<div>
					<CardTitle className="flex justify-between items-baseline group-hover:opacity-0 transition-opacity"><span>{props.blueprint.title}</span><span className="text-lg">79.000 Ft;</span></CardTitle>
					<CardDescription className="group-hover:opacity-0 transition-opacity">{props.blueprint.description}</CardDescription>
				</div>
				<div>
					<Badge variant={"secondary"} className="group-hover:opacity-0 transition-opacity"><MousePointer2 className="h-4 w-4 mr-2" /> Húzd ide a kurzort a képért</Badge>
				</div>
			</CardHeader>
			<CardContent className="pt-6 grid grid-cols-2 bg-white">
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
			</CardContent>
			<CardFooter className="bg-white flex justify-between pt-6">
				<Button variant={"link"}>Hasonló tervrajzok</Button>
				<Button variant={"secondary"}>Olvass tovább <ChevronRight className="h-4 w-4 ml-2" /></Button>
			</CardFooter>
		</Card>
	);
}