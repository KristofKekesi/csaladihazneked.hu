"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import PostBig from "./PostBig";
import { cn } from "@/lib/utils";

export default function PostBigCarousel(props: {className: Object}) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={cn("w-full flex justify-center cursor-ew-resize", props.className)}>
			<Carousel
				className="w-full"
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
      			onMouseLeave={plugin.current.reset}
				opts={{align: "center", loop: true, direction: "ltr"}}
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem className="basis-1/1 md:basis-1/2 xl:basis-1/3" key={index}>
						<PostBig post={{
							id: 0,
							title: "Harmadik bejegyzés",
							description: "Mi is ez itt?",
							imageURL: "",
							content: ""
						}} />
					</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
