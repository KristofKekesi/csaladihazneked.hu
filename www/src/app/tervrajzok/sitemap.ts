import { Blueprint } from "@/types/Blueprint";
import { getAllBlueprint } from "@/lib/api";
import { MetadataRoute } from "next";

const DOMAIN: string = "https://www.csaladihazneked.hu";

export default async function sitemap() {
	const blueprints: Array<Blueprint> = await getAllBlueprint();

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
