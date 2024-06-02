"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { Blueprint } from "@/types/Blueprint";
import BlueprintMedium from "@/components/blueprint/BlueprintMedium";
import { cn } from "@/lib/utils";
import { useRef } from "react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	blueprints: Array<Blueprint>,
	className?: string
}

/**
 * A carousel component with `BlueprintMediumCarousel`s inside.
 * @param blueprints An `Array` of `Blueprint`s to populate the component from.
 * @returns A carousel of `BlueprintMedium` components populated from the given `blueprints`.
 */
export default function BlueprintMediumCarousel(params: Params): JSX.Element {
	const plugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	return (
		<div className={
			cn("w-full flex justify-center cursor-ew-resize",
			params.className)
		}>
			<Carousel
				className="w-full"
				plugins={ [plugin.current] }
				onMouseEnter={ plugin.current.stop }
      			onMouseLeave={ plugin.current.reset }
				opts={{ align: "start", loop: true, direction: "ltr" }}
			>
				<CarouselContent>
					{ params.blueprints.map((blueprint, index) => (
						<CarouselItem className="md:basis-1/2 xl:basis-1/3" key={ index }>
							<BlueprintMedium blueprint={ blueprint } />
						</CarouselItem>
					)) }
				</CarouselContent>
			</Carousel>
		</div>
	);
}
