"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Image as ImageType } from "@/types/Image";
import { useRef } from "react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	images: Array<ImageType>,
	className?: string
}

/**
 * A carousel component with images.
 * @param images An array of `Image`s.
 * @param className An optional `string` containing CSS classes to modify the component with.
 * @returns A carousel populated with the `images` provided.
 */
export default function ImageCarousel(params: Params) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={ cn("w-full flex justify-center cursor-ew-resize", params.className) }>
			<Carousel
				className="w-full"
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
      			onMouseLeave={plugin.current.reset}
				opts={{align: "start", loop: true, direction: "ltr"}}
			>
				<CarouselContent>
					{ params.images.map((image, index) => (
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
