import { Blueprint } from "@/types/Blueprint";
import { Post } from "@/types/Post";

const IMGs: Array<string> = [
	"https://damassets.autodesk.net/content/" +
	"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
	"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg",
	"https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
	"https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
	"https://images.pexels.com/photos/716661/pexels-photo-716661.jpeg",
	"https://images.pexels.com/photos/1404948/pexels-photo-1404948.jpeg",
	"https://images.pexels.com/photos/8837511/pexels-photo-8837511.jpeg",
	"https://images.pexels.com/photos/8962797/pexels-photo-8962797.jpeg",
	"https://images.pexels.com/photos/5915147/pexels-photo-5915147.jpeg"
];

function randomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomBool(): boolean {
	return Math.floor(Math.random() * 100 ) % 2 === 1;
}

export function getRandomBlueprint(): Blueprint {
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
			return "ABCD EFGHI JKLMN OPQRST UVWX YZ abc defgh ijklm nopqrst uvwxy z 012 3456 789"
			.charAt(Math.floor(62*Math.random()));}).join(""),
		price: randomNumber(10000, 100000),
		imageURL: IMGs[Math.floor(Math.random()*IMGs.length)],
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

export function getRandomPost(): Post {
	return {
		id: randomNumber(0, 100000),
		title: "_".repeat(10).split("").map(function(){
			return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
			.charAt(Math.floor(62*Math.random()));}).join(""),
		description: "_".repeat(123).split("").map(function(){
			return "ABCD EFGHI JKLMN OPQRST UVWX YZ abc defgh ijklm nopqrst uvwxy z 012 3456 789"
			.charAt(Math.floor(62*Math.random()));}).join(""),
		imageURL: IMGs[Math.floor(Math.random()*IMGs.length)],
		content: ""
	}
	;
}
