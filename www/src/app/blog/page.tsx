import { Subtitle, Title } from "@/components/general/Typography";
import { getAllPost } from "@/lib/api";
import MailingListExtendedFooter from "@/components/extendedFooters/mailingList";
import { Metadata } from "next";
import { Post } from "@/types/Post";
import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";


export const metadata: Metadata = {
	title: "Blog"
};


export default async function Blog() {
	const posts: Array<Post> = await getAllPost();
	const highlightedPosts: Array<Post> = 
		posts.filter((post) => {
			return post.isHighlighted;
		});
	const generalPosts: Array<Post> = 
		posts.filter((post) => {
			return !post.isHighlighted;
		});

	return (
		<main className="flex flex-col just pt-3">
		<Title className="px-6">Blog</Title>
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
		<MailingListExtendedFooter />
		</main>
	);
}
