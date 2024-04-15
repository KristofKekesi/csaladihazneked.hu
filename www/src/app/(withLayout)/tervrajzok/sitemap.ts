import { Blueprint } from "@/types/Blueprint";
import { getAllBlueprints } from "@/lib/wp_api";
import { MetadataRoute } from "next";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns Sitemap for /tervrajzok.
 */
export default async function sitemap() {
	// Guard closes.
	if (!process.env.NEXT_PUBLIC_DOMAIN) {
		throw new Error("NEXT_PUBLIC_DOMAIN environmental variable is not set.");
	}
	const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

	const blueprints: Array<Blueprint> = await getAllBlueprints();

	let sitemap: MetadataRoute.Sitemap = [];
	blueprints.map((blueprint: Blueprint) => {
		sitemap.push(
			{
				url: `${ DOMAIN }/tervrajzok/${ blueprint.slug }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
