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
				url: `${ DOMAIN }/blog/${ post.slug }`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.6,
			}
		);
	});

	return sitemap;
}
