import { Blueprint } from "@/types/Blueprint";
import { getAllBlueprints } from "./api";

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
 * A function to get similar `Blueprint`s as a given `blueprint`.
 * @param blueprint A `Blueprint` that you want to find similars about.
 * @param limit An optional number to max the results.
 * @returns Returns an `Array` of similar `Blueprint`s based on a mathematical formula.
 */
export default async function getSimilarBlueprints(
	{ blueprint, limit = 50 }: Params) : Promise<Array<Blueprint>> {
	const blueprints: Array<Blueprint> = await getAllBlueprints();

	// Remove the blueprint that we will use to search for similar ones.
	blueprints.filter((compareableBlueprint) => { return compareableBlueprint !== blueprint; });

	type similarityParams = {
		blueprint: Blueprint,
		compareableBlueprint: Blueprint
	}
	
	/**
	 * 
	 * @param params 
	 * @returns 
	 */
	function similarity(params: Params) : number {
		let similarity: number = 0;
		
		// type

		return 0;
	}

	return blueprints.slice(0, limit);
}
