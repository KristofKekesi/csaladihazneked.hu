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
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";


export default function PostBig(props: {post: Post}) {
	return (
		<Card>
			<div className="relative">
				<div className="absolute w-full h-full">
					<div className="w-full aspect-square relative group-hover:blur
					group-hover:opacity-40 transition-all">
						<Image
							src={ props.post.imageURL } alt=""
							fill
							className="rounded-md object-cover"
						/>
					</div>
				</div>
			</div>
			<CardHeader className="backdrop-blur-2xl bg-white/20 rounded-t-lg h-38">
				<CardTitle className="w-full flex flex-nowrap flex-col
				md:flex-row justify-between items-baseline gap-4">
					<span className="line-clamp-3 select-auto">
						{props.post.title }
					</span>
					<span className="text-lg whitespace-nowrap">2024/01/04</span>
				</CardTitle>
				<CardDescription className="line-clamp-4 select-auto">
					{props.post.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="h-32">
			</CardContent>
			<CardFooter className="flex justify-end md:justify-between pt-6 
			backdrop-blur-2xl bg-white/20 rounded-b-lg">
				{ //TODO(KristofKekesi): Implement
				//<Button className="hidden md:inline" variant={"link"}>Hasonló bejegyzések</Button>
				}
				<Link href={`/blog/${props.post.slug}`}>
					<Button variant={"secondary"}>
						Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
