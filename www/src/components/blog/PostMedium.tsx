import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function PostMedium(props: {bgOpacity: string, post: Post}) {
	return (
		<Card className="flex justify-between items-end bg-cover" style={{backgroundImage: "url(https://damassets.autodesk.net/content/dam/autodesk/www/solutions/generative-design/fy22/images/blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg)"}}>
			<CardHeader className="backdrop-blur-2xl rounded-l-lg bg-black/5 w-1/4">
				<CardTitle>{props.post.title}</CardTitle>
				<CardDescription>{props.post.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button variant={"secondary"} className="drop-shadow-2xl">Tovább <ChevronRight className="h-4 w-4 ml-2" /></Button>
			</CardFooter>
		</Card>
	);
	return(
		<div className={`w-full rounded-xl bg-teal-800 ${props.bgOpacity} text-black/75 flex justify-between items-center h-24 group transition-all`}>
			<div className="flex gap-4 items-center">
				<div className="h-24 aspect-square bg-red-100 rounded-l-xl" />
				<div className="h-16 flex flex-col">
					<div className="flex gap-3 items-baseline h-6">
						<div className="text-xl text-white">{props.post.title}</div>
						<div className="text-base text-white/50">2023/12/11</div>
					</div>
					<div className="text-white font-light italic">{props.post.description}</div>
				</div>
			</div>
			<div className="text-xl h-16 aspect-square bg-white bg-opacity-25 group-hover:bg-opacity-50 rounded-lg m-4">Nyíl</div>
        </div>
	);
}