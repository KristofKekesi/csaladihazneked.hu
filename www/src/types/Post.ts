import { Image } from "@/types/Image";

export type Post = {
	id: string,
	title: string,
	slug: string,
	isHighlighted: boolean,
	description: string,
	highlightedImage: Image
	content: string
}
