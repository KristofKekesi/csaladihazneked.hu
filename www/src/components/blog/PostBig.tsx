import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function PostBig(props: {post: Post}) {
	return (
		<Card style={{backgroundImage: "url(https://damassets.autodesk.net/content/dam/autodesk/www/solutions/generative-design/fy22/images/blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg)"}}>
			<CardHeader className="backdrop-blur-2xl bg-black/5 rounded-t-lg">
				<CardTitle className="flex justify-between items-baseline"><span>{props.post.title}</span><span className="text-lg">2024/01/04</span></CardTitle>
				<CardDescription>{props.post.description}</CardDescription>
			</CardHeader>
			<CardContent className="h-32">
			</CardContent>
			<CardFooter className="flex justify-between pt-6 backdrop-blur-2xl bg-black/5 rounded-b-lg">
				<Button variant={"link"}>Hasonló bejegyzések</Button>
				<Button variant={"secondary"}>Olvass tovább <ChevronRight className="h-4 w-4 ml-2" /></Button>
			</CardFooter>
		</Card>
	);
}
