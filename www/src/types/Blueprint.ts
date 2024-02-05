export type Blueprint = {
	id: string,
	subtitle?: string,
	isHighlighted?: boolean,
	slug: string,
	title: string,
	description: string,
	content: string,
	price?: number,
	imageURL: string,
	images: Array<string>,
	
	type: string //"Lakás" | "Családiház" | "Bolt" | "Ipar",
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
