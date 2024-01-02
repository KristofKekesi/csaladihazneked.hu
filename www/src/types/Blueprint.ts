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
	description: string,
	imageURL: string,
	squarem: number,
	type: BlueprintType
}