import Image from "next/image";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ImageRenderer(props: any) {
    // Note: must use span: "Invalid HTML may cause hydration mismatch such as div inside p.".
    return (
        <span className="py-12 w-full flex flex-col items-start
		justify-start md:items-center break-words">
            <span className="flex md:justify-center w-full">
                <span className="w-0 md:w-1/2" />
                <Image
                    className="object-contain md:max-h-96 h-full w-full md:w-auto"
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
					<span className="px-4 hidden md:inline md:w-1/2 text-orange-950/40 
					uppercase border-spacing-5 text-sm text-left">	
						{props.alt}
					</span>
				: <span className="w-0 md:w-1/2" /> }
            </span>
			{ props.caption ?
	            <span className="mt-2 text-orange-950/40 border-spacing-5 text-sm text-left">
                	{props.caption}
                	<span className="uppercase inline md:hidden">
						<span className="px-2">-</span>
						{props.alt}
					</span>
            	</span>
				: null }
        </span>
        
    );
}
