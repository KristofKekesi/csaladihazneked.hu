"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Partner from "@/components/index/Partner";
import { Partner as PartnerType } from "@/types/Partner";
import { useRef } from "react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	partners: Array<PartnerType>,
	className?: string
}

/**
 * A component to display `Partner`s in an auto scrolling carousel.
 * @param partners An `Array<Partner>` to populate the carousel from. 
 * @returns An auto scrolling carousel displaying the given partners.
 */
export async function PartnerCarousel(params: Params): Promise<JSX.Element> {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	let carouselItemClassName: string;
	switch ( params.partners.length ) {
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
		<div className={cn("w-full flex justify-center cursor-ew-resize", params.className)}>
			<Carousel
				className="w-full"
				plugins={[ plugin.current ]}
				onMouseEnter={ plugin.current.stop }
      			onMouseLeave={ plugin.current.reset }
				opts={{ align: "start", loop: true, direction: "ltr" }}
			>
				<CarouselContent>
					{ params.partners.map((partner, index) => (
						<CarouselItem key={ index } className={ carouselItemClassName }>
							<Partner partner={ partner } />
						</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
