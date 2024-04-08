"use client";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

import { cn, isTrue } from "@/lib/utils";
import Image from "next/image";
import { SyntheticEvent } from "react";


type customImageParams = Required<
	Pick<Partial<HTMLImageElement>, "alt"> &
	Pick<Partial<HTMLImageElement>, "src"> &
	Pick<Partial<HTMLImageElement>, "className">
> & {
	imageClassName?: string, title?: string,
	loading?: "lazy", sizes?: any,
	fill?: boolean
};
	
/**
 * A custom image component with fallback image.
 */
export default function CustomImage({
	alt, src, className, imageClassName, ...params
}: customImageParams) {
	// Guard closes
	const DEV_TRANSPARENT_IMAGES = process.env.NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES;
	if (DEV_TRANSPARENT_IMAGES === undefined) {
		throw new Error(
			"NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES environmental variable is not provided."
		);
	}

	/**
	 * Error handler to change the src parameter to the fallback image.
	 */
	function onError(this: HTMLImageElement, _event: SyntheticEvent<HTMLImageElement>) {
		this.onerror = null;
		this.src = "./image-fallback.svg";
	}

	return (
		<div className={cn("relative", className)}>
			<Image
				src={ isTrue(DEV_TRANSPARENT_IMAGES) ? "/transparent.png" : 
				src }
				alt={ alt } fill
				className={cn("bg-[#f4f4f4]", imageClassName)}
				onError={ onError }
				{...params}
			/>
		</div>
	);
}
