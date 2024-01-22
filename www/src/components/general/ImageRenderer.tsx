import Image from "next/image";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ImageRenderer(props: any) {
    // Note: must use span: "Invalid HTML may cause hydration mismatch such as div inside p.".
    return (
        <span className="flex flex-col lg:flex-row lg:justify-center 
        w-full my-8 px-0 md:px-12 lg:px-0">
            <span className="w-0 xl:w-1/2" />
            <Image
                className="object-contain lg:max-h-96 h-full w-full lg:w-auto select-none"
                loading="lazy"
                width={0}
                height={0}
                src={ props.src }
                alt={ props.alt ? props.alt : "" }
                //srcSet={`
                //${imageSrc}?w=1024 1024w, ${imageSrc}?w=705 705w, 
                //${imageSrc}?w=150 150w, ${imageSrc}?w=300 300w, 
                //${imageSrc}?w=768 768w, ${imageSrc}?1248w`}
                sizes="100vw"
                { ...props}
            />
            { props.alt ?
                <span className="pt-4 lg:px-4 lg:py-0 w-full lg:w-1/2 
                text-justify text-orange-950/40 uppercase border-spacing-5 text-sm">	
                    {props.alt}
                </span>
            : <span className="w-0 md:w-1/2" /> }
        </span>
    );
}
