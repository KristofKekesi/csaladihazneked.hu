import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Post } from "@/types/post";
import Balancer from "react-wrap-balancer";

type Props = {
	post: Post,
	className?: string
}

const IMG = "https://damassets.autodesk.net/content/" +
"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg";

export default function PostMedium(props: Props) {
	return (
		<Card 
			className={cn("flex justify-between items-end bg-cover", props.className)}
			style={{backgroundImage: `url(${IMG})`}}
		>
			<CardHeader className="backdrop-blur-2xl rounded-l-lg bg-black/5 w-1/2 md:w-1/3 h-32">
				<CardTitle>
					<Balancer>{props.post.title}</Balancer>
				</CardTitle>
				<CardDescription>{props.post.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button variant={"secondary"} className="drop-shadow-2xl">
					Tovább <ChevronRight className="h-4 w-4 ml-2" />
				</Button>
			</CardFooter>
		</Card>
	);
}
