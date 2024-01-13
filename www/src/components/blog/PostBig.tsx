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
import { Post } from "@/types/post";

export default function PostBig(props: {post: Post}) {
	return (
		<Card style={{
			backgroundImage: `url(${props.post.imageURL})`
		}}>
			<CardHeader className="backdrop-blur-2xl bg-black/5 rounded-t-lg">
				<CardTitle className="flex flex-col md:flex-row justify-between items-baseline">
					<span>{props.post.title}</span>
					<span className="text-lg">2024/01/04</span>
				</CardTitle>
				<CardDescription>{props.post.description}</CardDescription>
			</CardHeader>
			<CardContent className="h-32">
			</CardContent>
			<CardFooter className="flex justify-end md:justify-between pt-6 
			backdrop-blur-2xl bg-black/5 rounded-b-lg">
				<Button className="hidden md:inline" variant={"link"}>Hasonló bejegyzések</Button>
				<Button variant={"secondary"}>
					Olvass tovább <ChevronRight className="h-4 w-4 ml-2" />
				</Button>
			</CardFooter>
		</Card>
	);
}
