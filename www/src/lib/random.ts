import { Blueprint } from "@/types/Blueprint";

function randomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomBool(): boolean {
	return Math.floor(Math.random() * 100 ) % 2 === 1;
}

export default function getRandomBlueprint(): Blueprint {
	let randomType: "Lakás" | "Családihaz" | "Bolt" | "Ipar" = "Ipar";
	let random = randomNumber(0, 3);
	switch (random) {
		case 0: randomType = "Bolt";
		case 1: randomType = "Családihaz";
		case 2: randomType = "Ipar";
		case 3: randomType = "Lakás";
	}

	return {
		id: randomNumber(0, 100000),
		title: "_".repeat(10).split("").map(function(){
			return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
			.charAt(Math.floor(62*Math.random()));}).join(""),
		description: "_".repeat(123).split("").map(function(){
			return "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789"
			.charAt(Math.floor(62*Math.random()));}).join(""),
		price: randomNumber(10000, 100000),
		imageURL: "",
		//
		type: randomType,
		squarem: randomNumber(100, 500),
		floors: randomNumber(1, 3),
		//
		rooms: {
			rooms: randomNumber(1, 13),
			livingroom: randomNumber(1, 5),
			bathroom: randomNumber(1, 5),
			wc: randomNumber(1, 5),
		},
		features: {
			basement: randomBool(),
			american_kitchen: randomBool()
		}
	};
}
