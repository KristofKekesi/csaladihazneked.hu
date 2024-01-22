import { getRandomPost } from "@/lib/random";
import { MetadataRoute } from "next";
import { Post } from "@/types/Post";

const DOMAIN: string = "https://www.csaladihazneked.hu";

export default function sitemap(): MetadataRoute.Sitemap {
	const posts: Array<Post> = [getRandomPost(), getRandomPost()];

	let sitemap: MetadataRoute.Sitemap = [];
	posts.map((post: Post) => {
		sitemap.push(
			{
				url: `${ DOMAIN }/tervrajzok/${ post.id }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
