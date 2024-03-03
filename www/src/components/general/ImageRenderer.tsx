import Image from "next/image";
import { isTrue } from "@/lib/utils";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A component to render Images.
 * @param params 
 * @returns An image populated by the `params`.
 */
export default function ImageRenderer(params: any) {
    // Guard closes
	const DEV_TRANSPARENT_IMAGES = process.env.NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES;
	if (DEV_TRANSPARENT_IMAGES === undefined) {
		throw new Error(
            "NEXT_PUBLIC_DEV_TRANSPARENT_IMAGES environmental variable is not provided."
        );
	}

    // Note: must use span: "Invalid HTML may cause hydration mismatch such as div inside p.".
    return (
        <span className="flex flex-col lg:flex-row lg:justify-center 
        w-full my-8 px-0 md:px-12 lg:px-0">
            <span className="w-0 xl:w-1/2" />
            <Image
                className="object-contain lg:max-h-96 h-full w-full lg:w-auto select-none"
                loading="lazy"
                width="0"
                height="0"
                src={ isTrue(DEV_TRANSPARENT_IMAGES) ? "/transparent.png" : params.src }
                alt={ params.alt ? params.alt : "" }
                sizes="100vw"
                { ...params}
            />
            { params.alt ?
                <span className="pt-4 lg:px-4 lg:py-0 w-full lg:w-1/2 
                text-justify text-orange-950/40 uppercase border-spacing-5 text-sm">	
                    {params.alt}
                </span>
            : <span className="w-0 md:w-1/2" /> }
        </span>
    );
}
