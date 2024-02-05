export type Blueprint = {
	id: string,
	isHighlighted?: boolean,
	slug: string,
	title: string,
	description?: string,
	price?: number,
	imageURL: string,
	
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
	}
}
