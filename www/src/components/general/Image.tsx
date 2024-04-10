"use client";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

import { cn, isTrue } from "@/lib/utils";
import Image from "next/image";


type customImageParams = Required<
	Pick<Partial<HTMLImageElement>, "alt"> &
	Pick<Partial<HTMLImageElement>, "src"> &
	Pick<Partial<HTMLImageElement>, "className">
> & {
	imageClassName?: string, title?: string,
	loading?: "lazy", sizes?: any
};
	
/**
 * A custom image component with fallback image.
 */
export default function CustomImage({
	alt, src, className, imageClassName, ...params
}: customImageParams) {
	const DEV_TRANSPARENT_IMAGES = 
		process.env.NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES ? 
			process.env.NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES : "false";

	/**
	 * Error handler to change the src parameter to the fallback image.
	 */
	function onError(event: any) {
		event.target.removeAttribute("srcset");
		event.target.src = "/image-fallback.svg";
		event.target.error = null;
		event.target.style.objectFit = "cover";
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
