"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Photo } from "@/types/Photo";
import { useRef } from "react";

type Props = {
	images: Array<Photo>,
	className?: string
}

export default function ImageCarousel(props: Props) {
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
					{ props.images.map((image, index) => (
					<CarouselItem key={index}>
						<div className="bg-slate-200 rounded-lg flex aspect-video
							items-center justify-center p-0 m-0 relative">
							<Image
								src={ image.src } alt={ image.alt }
								fill
								className="aspect-video bg-contain rounded-lg object-contain" />
						</div>
					</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
