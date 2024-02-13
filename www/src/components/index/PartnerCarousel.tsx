"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Partner from "./Partner";
import { Partner as PartnerType } from "@/types/Partner";
import { useRef } from "react";


type Props = {
	partners: Array<PartnerType>,
	className?: string
}

export async function PartnerCarousel(props: Props) {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	let carouselItemClassName: string;
	switch ( props.partners.length ) {
		case 1:
			carouselItemClassName = "";
			break;
		case 2:
			carouselItemClassName = "sm:basis-1/2";
			break;
		case 3:
			carouselItemClassName = "sm:basis-1/2 xl:basis-1/3";
			break;
		default:
			carouselItemClassName = "sm:basis-1/2 xl:basis-1/4";
			break;

	}
	
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
					{ props.partners.map((partner, index) => (
					<CarouselItem key={ index } className={ carouselItemClassName }>
						<Partner partner={ partner } />
					</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
