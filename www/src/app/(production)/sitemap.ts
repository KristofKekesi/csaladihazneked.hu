import { MetadataRoute } from "next";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns Sitemap for /.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	if (!process.env.NEXT_PUBLIC_DOMAIN) {
		throw new Error("NEXT_PUBLIC_DOMAIN environmental variable is not set.");
	}
	const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

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
