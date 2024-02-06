import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";
import { cn } from "@/lib/utils";

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
			className={cn("h-[146px]", props.className)}
		>
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full">
					<div className="w-full h-full relative group-hover:blur
					group-hover:opacity-40 transition-all">
						<Image
							src={ props.post.imageURL } alt=""
							fill
							className="rounded-md object-cover"
						/>
					</div>
				</div>
				<div className="absolute w-full">
					<div className="flex justify-between items-end bg-cover">
						<CardHeader className="backdrop-blur-2xl rounded-l-lg
						bg-white/20 w-1/2 h-36 select-auto relative">
							<CardTitle>
								<Balancer>{props.post.title}</Balancer>
							</CardTitle>
							<CardDescription className="line-clamp-3">
								{ props.post.description }
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<Link href={`/blog/${props.post.slug}`}>
								<Button variant={"secondary"} className="drop-shadow-2xl">
									Tovább <ChevronRight className="h-4 w-4 ml-2" />
								</Button>
							</Link>
						</CardFooter>
					</div>
				</div>
			</div>
		</Card>
	);
}
