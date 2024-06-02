import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomImage from "@/components/general/Image";
import Link from "next/link";
import { Post } from "@/types/Post";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	post: Post,
	className?: string
}

/**
 * @param post A `Post` to get data for the component to use.
 * @param className: A `string` which contains CSS classes.
 * @returns A component to display some informations about a `Post`.
 */
export default function PostMedium(params: Params): JSX.Element {
	return (
		<Card 
			className={ cn("h-[146px]", params.className) }
		>
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full">
					<CustomImage
						alt={ params.post.title }
						src={ params.post.highlightedImage.src }
						className="w-full h-full group-hover:blur
						group-hover:opacity-40 transition-all"
						imageClassName="rounded-md object-cover"
					/>
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
							<Link href={ `/blog/${ params.post.slug }` }>
								<Button variant="secondary" className="drop-shadow-2xl">
									Tovább <ChevronRight className="size-4 ml-2" />
								</Button>
							</Link>
						</CardFooter>
					</div>
				</div>
			</div>
		</Card>
	);
}
