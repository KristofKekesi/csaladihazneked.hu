//** This page was removed because of client needs. 
// Since this is such a core feature the page won't be deleted.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header, Subtitle, subtitleClassNames, Title } from "@/components/general/Typography";
import { Balancer } from "react-wrap-balancer";
import BlueprintSmall from "@/components/blueprint/BlueprintSmall";
import { cn } from "@/lib/utils";
import { getPosts } from "@/lib/filter_data";
import html2md from "@/lib/html2md";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";
import { Post } from "@/types/Post";
import PostMediumCarousel from "@/components/blog/PostMediumCarousel";
import PostSmall from "@/components/blog/PostSmall";


type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata(
	{ params }: Props
  ): Promise<Metadata> {
	const post: Post = ( await getPosts({slug: params.slug}) )[0];

	return {
		title: post.title,
		description: post.description
	};
}

/**
 * @param params Object containing the slug of the URL and the post.
 * 
 * @returns Page for /blog/**
 */

export default async function Page({ params }: Props) {
	const post: Post = ( await getPosts({slug: params.slug}) )[0];
	const content = await html2md({html: post.content});

	return(
		<main>
			<Subtitle className="pt-6 px-6 font-caprasimo font-normal">2024/01/14</Subtitle>
			<Title className="px-6 font-serif font-bold">{ post.title }</Title>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{ content }
			</Markdown>
			<Card className="col-span-5 md:col-span-2 flex
			flex-col h-full justify-between mx-6 mt-6 rounded-b-[48px]">
				<CardHeader className="flex flex-col">
					<CardTitle className={ cn(subtitleClassNames, "pb-4 px-0") }>
						<Balancer>Részletek</Balancer>
					</CardTitle>
					<CardContent className="flex flex-col pl-0 pb-0 gap-4">
						<div className="flex flex-col select-auto">
							<p className="text-lg font-semibold">
								Első bejegyzés
								<span className="pl-4 text-base font-normal">(2024/04/14)</span>
							</p>
							<p>Írta: Kékesi Kristóf</p>
						</div>
						<div>
							<Header className="p-0 pl-6">Megemlített bejegyzések</Header>
							<div className="flex flex-wrap gap-4 w-full ">
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
								<PostSmall post={post} />
							</div>
						</div>
						<div>
							<Header className="p-0 pl-6">Megemlített tervrajzok</Header>
							<div className="flex flex-wrap gap-4 w-full ">
								{
								//<BlueprintSmall blueprint={ getRandomBlueprint() } />
								}
							</div>
						</div>
					</CardContent>
				</CardHeader>
			</Card>
			<Subtitle className="pt-6 px-6">Hasonló bejegyzések</Subtitle>
			<hr className="pb-4" />
			<PostMediumCarousel 
				posts={[post, post, post, post, post]}
				className="px-6"
			/>
		</main>
	);
}
