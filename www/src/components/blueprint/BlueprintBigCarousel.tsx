"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import BlueprintBig from "./BlueprintBig";
import { cn } from "@/lib/utils";
import { Blueprint } from "@/types/Blueprint";

type Props = {
	blueprints: Array<Blueprint>,
	className?: string
}

export default function BlueprintBigCarousel(props: Props) {
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
					{props.blueprints.map((blueprint, index) => (
					<CarouselItem key={index}>
						<BlueprintBig blueprint={blueprint} />
					</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
