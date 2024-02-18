import { MetadataRoute } from "next";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

const DOMAIN: string = "https://www.csaladihazneked.hu";

/**
 * @returns Sitemap for /.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: DOMAIN,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${DOMAIN}/referencia`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN}/tervrajzok`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8,
		}
	];
}
