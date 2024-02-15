/* eslint-disable require-jsdoc */

"use client";

import React, { useEffect } from "react";
React.useLayoutEffect = React.useEffect;

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Photo } from "@/types/Photo";
import PhotoAlbum from "react-photo-album";
import { TRANSPARENT_IMAGES } from "../../../../config";
import { useInView } from "react-intersection-observer";


//TODO(KristofKekesi): TypeScriptify


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export function onClick(props: any) {
    const element = document.getElementById(props.target.getAttribute("data-index"))!;
    const wrapper = document.getElementById(props.target.getAttribute("data-index") + "-wrapper")!;

    element.classList.toggle("selected");
    if (!element.classList.contains("selected")) {
        document.getElementsByTagName("html")[0].removeAttribute("selected");

        element.style.position = "none";
        element.style.height = "auto";
        element.style.width = "auto";
        wrapper.classList.add("hidden");

		document.getElementsByTagName("header")[0].style.position = "inline";
		document.getElementsByTagName("footer")[0].style.position = "inline";
    } else {
        element.style.position = "fixed";
        element.style.height = "100%";
        element.style.width = "100%";
        wrapper.classList.remove("hidden");

		document.getElementsByTagName("header")[0].style.position = "hidden";
		document.getElementsByTagName("footer")[0].style.position = "hidden";

        document.getElementsByTagName("html")[0].setAttribute("selected", "");
    }
}


function CustomImageRenderer(props: {
    photo: Photo, wrapperStyle: any, layout: any, imageProps: any
}) {
    const source = TRANSPARENT_IMAGES ? "/transparent.png" : props.photo.src;

    props.wrapperStyle["height"] = props.layout.height;

    return (
        <>
            <div style={ props.wrapperStyle }>
                <div style={
                    { display: "block", position: "relative", width: "100%", height: "100%" }
                }>
                    <Image
                        data-src={ props.photo.src }
                        data-index={ props.layout.index }
                        className={ cn("photo", props.imageProps.className) }
                        src={ source }
                        alt={ props.photo.alt }
                        title={ props.photo.title }
                        loading="lazy"
                        sizes={ props.imageProps.sizes }
                        fill
                    />
					{
						//TODO(KristofKekesi) accent-color: from css variables
					}
                </div>
            </div>
        </>
    );
}

function CustomRowRenderer(props: any) {
    const { ref } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        onChange: ((inView, event) => {
            if (inView) {
                event.target.classList.add("opacity-1");
                event.target.classList.remove("opacity-0");
            }
        })
    });

    return (
        <div ref={ref} className={cn(
            "motion-safe:transition-all opacity-0 motion-safe:delay-500motion-safe:duration-500"
            ,"motion-reduce:translate-y-0 select-none ",
            props.rowContainerProps.className
        )} style={ props.rowContainerProps.style }>
            { props.children }
        </div>
    );
}

export default function CustomGallery(props: {images: Array<Photo>, className?: string}) {
    var height = 0;
    if (typeof screen !== "undefined") {
        height = screen ? (screen.height / 3.5) : 0;
    }

    function setThemeColor() {
        if (document.getElementsByTagName("html")[0].getAttribute("selected") === "") {
            document.querySelector("meta[name='theme-color']")!.setAttribute("content",  "#000000");
        } else {
            const lastContent =
            document.querySelector("meta[name='theme-color']")!
                .getAttribute("last-content")!;
            document.querySelector("meta[name='theme-color']")!
                .setAttribute("content",  lastContent);
        }
    }

    useEffect(() => {
        //removeEventListener("click", setThemeColor);
        //addEventListener("click", setThemeColor);
	}, []);

    return(
        <>
            <div className={props.className}>
                <PhotoAlbum
                    layout="rows"
                    photos={props.images}
                    targetRowHeight={height}
                    spacing={3}
                    renderRowContainer={CustomRowRenderer}
                    renderPhoto={CustomImageRenderer}
                />
            </div>
        </>
    );
}
