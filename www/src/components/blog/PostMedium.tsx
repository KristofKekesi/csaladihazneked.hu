import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function PostMedium(props: {bgOpacity: string, post: Post}) {
	return (
		<Card className="flex justify-between items-end bg-cover" style={{backgroundImage: "url(https://damassets.autodesk.net/content/dam/autodesk/www/solutions/generative-design/fy22/images/blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg)"}}>
			<CardHeader className="backdrop-blur-2xl rounded-l-lg bg-black/5 w-1/3 h-32">
				<CardTitle>{props.post.title}</CardTitle>
				<CardDescription>{props.post.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button variant={"secondary"} className="drop-shadow-2xl">Tovább <ChevronRight className="h-4 w-4 ml-2" /></Button>
			</CardFooter>
		</Card>
	);
}
