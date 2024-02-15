"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Post } from "@/types/Post";
import PostBig from "./PostBig";
import { useRef } from "react";


type Params = {
	posts: Array<Post>,
	className?: string
}

/**
 * @param posts An array of `Post`s to populate the carousel from.
 * @param className A `string` which contains CSS classes. 
 * @returns A carousel component with auto scrolling from the array of `Post`s given.
 */
export default function PostBigCarousel(params: Params) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={ cn("w-full flex justify-center cursor-ew-resize", params.className) }>
			<Carousel
				className="w-full"
				plugins={ [plugin.current] }
				onMouseEnter={ plugin.current.stop }
      			onMouseLeave={ plugin.current.reset }
				opts={{ align: "start", loop: true, direction: "ltr" }}
			>
				<CarouselContent>
					{ params.posts.map((post, index) => (
						<CarouselItem className="md:basis-1/2 xl:basis-1/3" key={ index }>
							<PostBig post={post} />
						</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
