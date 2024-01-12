export type Blueprint = {
	id: number,
	title: string,
	description?: string,
	price?: number,
	imageURL: string,
	//
	type: "Lakás" | "Családihaz" | "Bolt" | "Ipar",
	squarem: number,
	floors: number,
	//
	rooms: {
		rooms: number,
		livingroom: number,
		bathroom: number,
		wc: number,
	},
	features: {
		basement: boolean,
		american_kitchen: boolean
	}
}
