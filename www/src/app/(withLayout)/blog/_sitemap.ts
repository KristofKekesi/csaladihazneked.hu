//** This sitemap was removed because of client needs. 
// Since this is such a core feature the sitemap won't be deleted.

import { getAllPosts } from "@/lib/wp_api";
import { MetadataRoute } from "next";
import { Post } from "@/types/Post";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A function to generate a sitemap for /blog.
 */
export default async function sitemap() {
	// Guard closes.
	if (!process.env.NEXT_PUBLIC_DOMAIN) {
		throw new Error("NEXT_PUBLIC_DOMAIN environmental variable is not set.");
	}
	const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

	const posts: Array<Post> = await getAllPosts();

	let sitemap: MetadataRoute.Sitemap = [];
	posts.map((post: Post) => {
		sitemap.push(
			{
				url: `${ DOMAIN }/blog/${ post.slug }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
