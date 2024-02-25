import { Blueprint } from "@/types/Blueprint";
import { getAllBlueprints } from "./wp_api";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	blueprint: Blueprint,
	limit?: number
}

/**
 * A function to get similar `Blueprint`s from a given `blueprint`.
 * @param blueprint A `Blueprint` that you want to find similars about.
 * @param limit An optional number to max the results.
 * @returns Returns an `Array` of similar `Blueprint`s based on a mathematical formula.
 */
export default async function getSimilarBlueprints(
	{ blueprint, limit = 50 }: Params) : Promise<Array<Blueprint>> {
	type similarityParams = {
		blueprintA: Blueprint,
		blueprintB: Blueprint
	}
	
	/**
	 * Function to make a score about two `Blueprint`s on how similar they are.
	 * @param blueprintA A `Blueprint` to compare against `blueprintB`.
	 * @param blueprintB A `Blueprint` to compare against `blueprintA`.
	 * @returns A number in a range of 0 and 1 representing how similar the 
	 * 			given blueprints they are.
	 */
	function similarity({ blueprintA, blueprintB }: similarityParams) : number {
		/**
		 * How it works
		 * Each category listed below has a similarity value from 0 to 1. Each category has a 
		 * multiplier to change how much does it contribute to the final number. The similarity
		 * is given by the average of these categories's similarity.
		 */
		
		// type
		const typeMultiplier = 7;
		
		let typeSimilarity: number = 0;
		if ( blueprintA.type === blueprintB.type ) {
			typeSimilarity = 1;
		}
		typeSimilarity = typeSimilarity * typeMultiplier;

		// size
		const sizeMultiplier = 3;
		const sizeDifference = blueprintA.squarem >= blueprintB.squarem ?
			blueprintB.squarem / blueprintA.squarem :
			blueprintA.squarem / blueprintB.squarem; // in percentage

		let sizeSimilarity: number;
		switch (true) {
			case ( sizeDifference < 0.5 ):	// less than 50%
				sizeSimilarity = 0;
				break;
			case ( sizeDifference < 0.6 ):	// between 50%-60%
				sizeSimilarity = 0.33;
				break;
			case ( sizeDifference < 0.8 ):	// between 60%-80%
				sizeSimilarity = 0.66;
				break;
			default:					// between 80%-100%
				sizeSimilarity = 1;
				break;
		}
		sizeSimilarity = sizeSimilarity * sizeMultiplier;

		// floors
		const floorMultiplier = 5;
		let floorSimilarity: number;
		if (blueprintA.floors === blueprintB.floors) {
			floorSimilarity = 1;
		} else {
			floorSimilarity = 0;
		}
		floorSimilarity = floorSimilarity * floorMultiplier;


		// rooms
		const roomMultiplier = 1;
		let roomsSimilarity: number = 0;
		if (blueprintA.rooms.rooms === blueprintB.rooms.rooms) { roomsSimilarity += 0.25; }
		if (blueprintA.rooms.livingroom === blueprintB.rooms.livingroom) {roomsSimilarity += 0.25; }
		if (blueprintA.rooms.bathroom === blueprintB.rooms.bathroom) { roomsSimilarity += 0.25; }
		if (blueprintA.rooms.wc === blueprintB.rooms.wc) { roomsSimilarity += 0.25; }
		roomsSimilarity = roomsSimilarity * roomMultiplier;

		const sum = typeSimilarity + sizeSimilarity + floorSimilarity + roomsSimilarity;
		const multipliers = typeMultiplier + sizeMultiplier + floorMultiplier + roomMultiplier;
		const average = sum / multipliers;

		return average;
	}

	let blueprints: Array<Blueprint> = await getAllBlueprints();

	// Remove the blueprint that we will use to search for similar ones.
	blueprints = blueprints.filter((compareableBlueprint) =>
		{ return compareableBlueprint.slug !== blueprint.slug; }
	);

	blueprints.sort((blueprintA, blueprintB) => {
		const a = similarity({ blueprintA, blueprintB: blueprint });
		const b = similarity({ blueprintA: blueprint, blueprintB });

		if (a === b) { return 0; }
		if (a < b) { return -1; } else { return 1; }
	});

	return blueprints.reverse().slice(0, limit);
}
