import { Image } from "@/types/Image";

export type Blueprint = {
	id: string,
	subtitle?: string,
	isHighlighted?: boolean,
	slug: string,
	title: string,
	description: string,
	content?: string,
	price?: number,
	highlightedImage: Image,
	images: Array<Image>,
	
	type: string //"Lakás" | "Családiház" | "Egyéb",
	squarem: number,
	floors: number,
	
	rooms: {
		rooms: number,
		livingroom: number,
		bathroom: number,
		wc: number,
	},
	features: {
		hasBasement: boolean,
		hasAttic: boolean,
		hasGarage: boolean
	},
	youtubeVideoURL?: string
}
