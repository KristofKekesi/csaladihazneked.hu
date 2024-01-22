"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

type Props = {
	images: Array<string>,
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
						<Card className="bg-slate-200">
							<CardContent className="flex aspect-video
							items-center justify-center p-0 m-0">
								<Image src={ image } height={100} width={100} alt={""}
								layout="responsive" className="aspect-video rounded-lg" />
							</CardContent>
						</Card>
					</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
