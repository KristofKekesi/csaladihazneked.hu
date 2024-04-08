import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import CustomImage from "@/components/general/Image";
import Link from "next/link";
import { Post } from "@/types/Post";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	post: Post
}

/**
 * @param post A Post object to render the component from.
 * @returns A component to show information about a given `Post`.
 */
export default function PostBig(params: Params) {
	return (
		<Card>
			<div className="relative">
				<div className="absolute w-full h-full">
					<CustomImage
						fill
						alt={ params.post.title }
						src={params.post.highlightedImage.src}
						className="w-full aspect-square relative group-hover:blur
						group-hover:opacity-40 transition-all"
						imageClassName="rounded-md object-cover"
					/>
				</div>
			</div>
			<CardHeader className="backdrop-blur-2xl bg-white/20 rounded-t-lg h-38">
				<CardTitle className="w-full flex flex-nowrap flex-col
				md:flex-row justify-between items-baseline gap-4">
					<span className="line-clamp-3 select-auto">
						{ params.post.title }
					</span>
					<span className="text-lg whitespace-nowrap">2024/01/04</span>
				</CardTitle>
				<CardDescription className="line-clamp-4 select-auto">
					{ params.post.description }
				</CardDescription>
			</CardHeader>
			<CardContent className="h-32">
			</CardContent>
			<CardFooter className="flex justify-end md:justify-between pt-6 
			backdrop-blur-2xl bg-white/20 rounded-b-lg">
				<Button className="hidden md:inline" variant="link">Hasonló bejegyzések</Button>
				<Link href={`/blog/${ params.post.slug }`}>
					<Button variant="secondary">
						Olvass tovább <ChevronRight className="size-4 ml-2" />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
