/* eslint-disable require-jsdoc */

"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import CustomImage from "@/components/general/Image";
import { Image as ImageType } from "@/types/Image";
import PhotoAlbum from "react-photo-album";
import { useInView } from "react-intersection-observer";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

export function onClick(params: any) {
    const element = document.getElementById(params.target.getAttribute("data-index"))!;
    const wrapper = document.getElementById(params.target.getAttribute("data-index") + "-wrapper")!;

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

function CustomImageRenderer(params: any) {
    params.wrapperStyle["height"] = params.layout.height;

    return (
        <>
            <div style={ params.wrapperStyle }>
                <CustomImage
                    alt={ params.photo.alt }
                    title={ params.photo.title }
                    src={ params.photo.src }
                    loading="lazy"
                    sizes={ params.imageProps.sizes }
                    className="block w-full h-full"
                    imageClassName={cn("image", params.imageProps.className)}

                    data-src={ params.photo.src }
                    data-index={ params.layout.index }
                />
            </div>
        </>
    );
}

function CustomRowRenderer(params: any) {
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
            params.rowContainerProps.className
        )} style={ params.rowContainerProps.style }>
            { params.children }
        </div>
    );
}

type GalleryParams = {
    images: Array<ImageType>,
    className?: string
}

export default function CustomGallery(params: GalleryParams) {
    var height = 0;
    if (typeof screen !== "undefined") {
        height = screen ? (screen.height / 3.5) : 0;
    }

    function _setThemeColor() {
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
            <div className={ params.className }>
                <PhotoAlbum
                    layout="rows"
                    photos={ params.images }
                    targetRowHeight={ height }
                    spacing={ 3 }
                    renderRowContainer={ CustomRowRenderer }
                    renderPhoto={ CustomImageRenderer }
                />
            </div>
        </>
    );
}
