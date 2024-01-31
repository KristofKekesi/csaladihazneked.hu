"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Post } from "@/types/Post";
import PostMedium from "./PostMedium";
import { useRef } from "react";

export default function PostMediumCarousel(props: {posts: Array<Post>, className: string}) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={
			cn("w-full flex flex-wrap justify-center cursor-ew-resize",
			props.className)
		}>
			<Carousel
				className="w-full"
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
      			onMouseLeave={plugin.current.reset}
				opts={{align: "start", loop: true, direction: "ltr"}}
			>
				<CarouselContent>
					{props.posts.map((post, index) => (
					<CarouselItem className="md:basis-1/2 xl:basis-1/3" key={index}>
						<PostMedium post={post} />
					</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
