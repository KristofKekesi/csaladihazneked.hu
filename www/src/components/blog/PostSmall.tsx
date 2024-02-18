import { Card, CardHeader } from "@/components/ui/Card";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
 * @param post A `Post` `Object` to use as data to populate the component.
 * @param className A `string` which conatains CSS classes.
 * @returns A small component with few info about the `Post`.
 */
export default function PostSmall(params: Params) {
	return (
		<Link href={`/blog/${ params.post.slug }`}>
			<Card className={
				cn("w-fit rounded-full hover:bg-slate-50 transition-colors", params.className)
			}>
				<CardHeader className="flex flex-row items-center gap-4 pl-3 pr-6 py-2">
					<Image src={ params.post.highlightedImage.src } height={32} width={32}
					alt={ params.post.title } className="object-cover rounded-full aspect-square" />
						<span className="font-semibold line-clamp-2 max-w-md select-auto"><Balancer>
							{ params.post.title }
						</Balancer></span>
				</CardHeader>
			</Card>
		</Link>
	);
}
