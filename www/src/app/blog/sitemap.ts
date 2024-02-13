import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";
import { Post } from "@/types/Post";

const DOMAIN: string = "https://www.csaladihazneked.hu";

/**
 * A function to generate a sitemap for /blog.
 */

export default async function sitemap() {
	const posts: Array<Post> = await getAllPosts();

	let sitemap: MetadataRoute.Sitemap = [];
	posts.map((post: Post) => {
		sitemap.push(
			{
				url: `${ DOMAIN }/blog/${ post.id }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
