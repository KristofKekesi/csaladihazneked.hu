enum BlueprintType {
	Apartman,
	Lakás,
	Csaladihaz,
	Bolt,
	Ipar
}

type Blueprint = {
	id: number,
	title: string,
	description?: string,
	price?: number,
	imageURL: string,
	//
	type: BlueprintType
	squarem: number,
	floors: number,
	//
	rooms?: number,
	livingroom?: number,
	bathroom?: number,
	wc?: number,
	//
	features?: [string]
}