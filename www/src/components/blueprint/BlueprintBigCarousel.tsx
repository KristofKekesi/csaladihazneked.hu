"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

import BlueprintBig from "./BlueprintBig";
import { cn } from "@/lib/utils";

export default function BlueprintBigCarousel(props: {className?: Object}) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={cn("w-full flex justify-center", props.className)}>
			<Carousel
				className="w-full"
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
      			onMouseLeave={plugin.current.reset}
				opts={{align: "center", loop: true, direction: "ltr"}}
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<BlueprintBig blueprint={{id: 0, title: "Tervrajz 1. - Teszt", description: "Lorem ipsum.", imageURL: "", squarem: 45, type: 2}} />
					</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}