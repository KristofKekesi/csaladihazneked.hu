import { SyntheticEvent } from "react";

/**
 * Image fallback via onError parameter.
 */
export default function onError(this: HTMLImageElement, _event: SyntheticEvent<HTMLImageElement>) {
	this.onerror = null;
	this.src = "./image-fallback.svg";
}
