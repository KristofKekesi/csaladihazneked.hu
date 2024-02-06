import { Card, CardHeader } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";

type Props = {
	post: Post,
	className?: string
}

export default function PostSmall(props: Props) {
	return (
		<Link href={`/blog/${props.post.slug}`}>
			<Card className={
				cn("w-fit rounded-full hover:bg-slate-50 transition-colors", props.className)
			}>
				<CardHeader className="flex flex-row items-center gap-4 pl-3 pr-6 py-2">
					<Image src={ props.post.imageURL } height={32} width={32}
					alt="" className="object-cover rounded-full aspect-square" />
						<span className="font-semibold line-clamp-2 max-w-md select-auto"><Balancer>
							{props.post.title}
						</Balancer></span>
				</CardHeader>
			</Card>
		</Link>
	);
}
