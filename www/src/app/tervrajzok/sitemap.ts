import { Blueprint } from "@/types/Blueprint";
import { getRandomBlueprint } from "@/lib/random";
import { MetadataRoute } from "next";

const DOMAIN: string = "https://www.csaladihazneked.hu";

export default function sitemap(): MetadataRoute.Sitemap {
	const blueprints: Array<Blueprint> = [getRandomBlueprint(), getRandomBlueprint()];

	let sitemap: MetadataRoute.Sitemap = [];
	blueprints.map((blueprint: Blueprint) => {
		sitemap.push(
			{
				url: `${ DOMAIN }/tervrajzok/${ blueprint.id }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
