import { Photo } from "./Photo";

export type Post = {
	id: string,
	title: string,
	slug: string,
	isHighlighted: boolean,
	description: string,
	highlightedPhoto: Photo
	content: string
}
