import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Photo } from "@/types/Photo";

//TODO(KristofKekesi): TypeScriptify

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export default function Lightbox(props: {
    index: number, maxIndex: number, photo: Photo, onClick: any
}) {
    function prev() {
        if (props.index !== 0) {
            if (typeof window === "object") {
                const prevElement = document.getElementById((props.index - 1).toString())!;
                const prevWrapper =
                    document.getElementById((props.index - 1).toString() + "-wrapper")!;
                
                prevElement.classList.add("selected");
                prevElement.style.position = "fixed";
                prevWrapper.classList.remove("hidden");

                const element = document.getElementById(props.index.toString())!;
                const wrapper = document.getElementById(props.index.toString() + "-wrapper")!;
                
                element.classList.remove("selected");
                element.style.position = "none";
                wrapper.classList.add("hidden");
            }
        }
    }


    function next() {
        if (props.index !== props.maxIndex - 1) {
            if (typeof window === "object") {
                const nextElement = document.getElementById((props.index + 1).toString())!;
                const nextWrapper =
                    document.getElementById((props.index + 1).toString() + "-wrapper")!;
                
                nextElement.classList.add("selected");
                nextElement.style.position = "fixed";
                nextWrapper.classList.remove("hidden");

                const element = document.getElementById(props.index.toString())!;
                const wrapper = document.getElementById(props.index.toString() + "-wrapper")!;
                
                element.classList.remove("selected");
                element.style.position = "none";
                wrapper.classList.add("hidden");
            }
        }
    }


    return (
        <div key={props.index} id={props.index.toString() + "-wrapper"} className="selected hidden fixed z-50 select-none">
            {props.index !== 0 ? <div className="text-white fixed flex flex-col justify-center h-screen left-0 top-0 z-50 text-8xl bg-black/30 backdrop-blur-lg" onClick={prev}>
                <ChevronLeft className="h-14 w-14" style={{filter: "drop-shadow(5px 5px 10px #000000)"}} />
            </div> : <></>}

            <Image className="w-screen h-screen" id={props.index.toString()} loading="lazy" data-src={props.photo.src} onClick={props.onClick} data-index={props.index} src={props.photo.src} alt={props.photo.alt} fill />

            {props.index !== props.maxIndex - 1 ? <div className="text-white fixed flex flex-col justify-center h-screen right-0 top-14 -pt-24 z-50 text-8xl bg-black/30 backdrop-blur-lg" onClick={next}>
                <ChevronRight className="h-14 w-14" style={{filter: "drop-shadow(5px 5px 10px #000000)"}} />
            </div> : <></>}

            <div className="h-14 w-14 text-white fixed flex flex-col justify-center items-center right-0 top-0 z-50 text-8xl pointer-events-none bg-black/30 backdrop-blur-lg">
                <X className="h-10 w-10" style={{filter: "drop-shadow(5px 5px 10px #000000)"}} />
            </div>
        </div>
    );
}
