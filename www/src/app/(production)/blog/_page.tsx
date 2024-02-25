//** This page was removed because of client needs. 
// Since this is such a core feature the page won't be deleted.

import { Subtitle, Title } from "@/components/general/Typography";
import { getPosts } from "@/lib/filter_data";
import { Metadata } from "next";
import NewsletterExtendedFooter from "@/components/extendedFooters/Newsletter";
import { Post } from "@/types/Post";
import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const metadata: Metadata = {
	title: "Blog"
};

/**
 * @returns Page for /blog.
 */
export default async function Blog() {
	const highlightedPosts: Array<Post> = await getPosts({ isHighlighted: true });
	const generalPosts: Array<Post> = await getPosts({ isHighlighted: false });

	return (
		<main className="flex flex-col just pt-3">
		<Title className="px-6 pb-2">Blog</Title>
		<Subtitle className="px-6">Kiemelt bejegyzések</Subtitle>
		<hr className="pb-4" />
		<PostBigCarousel className="px-6" posts={highlightedPosts} />
		<Subtitle className="pt-6 px-6">Minden bejegyzés</Subtitle>
		<hr className="a pb-4" />
		<section className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-3">
			{ [...generalPosts, ...highlightedPosts].map((post) => {
				return <PostMedium post={post} key={post.id} />;
			}) }
		</section>
		<Subtitle className="pt-6 px-6">Feliratkozás a hírlevélre</Subtitle>
		<hr className="pb-4" />
		<NewsletterExtendedFooter />
		</main>
	);
}
