import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";
import { Post } from "@/types/Post";

const DOMAIN: string = "https://www.csaladihazneked.hu";

export default async function sitemap() {
	const posts: Array<Post> = await getAllPosts();

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
