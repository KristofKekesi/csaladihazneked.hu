import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";

type Params = {
	post: Post,
	className?: string
}

/**
 * @param post A `Post` to get data for the component to use.
 * @param className: A `string` which contains CSS classes.
 * @returns A component to display some informations about a `Post`.
 */
export default function PostMedium(params: Params) {
	return (
		<Card 
			className={cn("h-[146px]", params.className)}
		>
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full">
					<div className="w-full h-full relative group-hover:blur
					group-hover:opacity-40 transition-all">
						<Image
							src={ params.post.highlightedPhoto.src } alt={ params.post.title }
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
								<Balancer>{ params.post.title }</Balancer>
							</CardTitle>
							<CardDescription className="line-clamp-3">
								{ params.post.description }
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<Link href={`/blog/${ params.post.slug }`}>
								<Button variant="secondary" className="drop-shadow-2xl">
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
