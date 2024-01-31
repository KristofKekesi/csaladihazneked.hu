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
import Link from "next/link";
import { Post } from "@/types/Post";

export default function PostBig(props: {post: Post}) {
	return (
		<Card style={{
			backgroundImage: `url(${props.post.imageURL})`
		}}>
			<CardHeader className="backdrop-blur-2xl bg-black/5 rounded-t-lg h-38">
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
			backdrop-blur-2xl bg-black/5 rounded-b-lg">
				{ //TODO(KristofKekesi): Implement
				//<Button className="hidden md:inline" variant={"link"}>Hasonló bejegyzések</Button>
				}
				<Link href={`/blog/${props.post.id}`}>
					<Button variant={"secondary"}>
						Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
