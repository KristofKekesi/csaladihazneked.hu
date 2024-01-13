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

const IMG = "https://damassets.autodesk.net/content/" +
"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg";

export default function PostBigCarousel(props: {className: string}) {
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
				opts={{align: "start", loop: true, direction: "ltr"}}
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem className="md:basis-1/2 xl:basis-1/3" key={index}>
						<PostBig post={{
							id: 0,
							title: "Harmadik bejegyzés",
							description: "Mi is ez itt?",
							imageURL: IMG,
							content: ""
						}} />
					</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
