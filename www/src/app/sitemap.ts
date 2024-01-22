import { MetadataRoute } from "next";

const DOMAIN: string = "https://www.csaladihazneked.hu";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: DOMAIN,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${DOMAIN}/blog`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8,
		},
		{
			url: `${DOMAIN}/galeria`,
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
