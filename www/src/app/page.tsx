import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlueprints, getAllPartners, getAllPosts } from "@/lib/api";
import { Subtitle, Title } from "@/components/general/Typography";
import Balancer from "react-wrap-balancer";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import EmailExtendedFooter from "@/components/extendedFooters/email";
import { getPage } from "@/lib/filter_data";
import html2md from "@/lib/html2md";
import Link from "next/link";
import Markdown from "@/components/general/MarkDown";
import Partner from "@/components/index/Partner";
import PostMedium from "@/components/blog/PostMedium";


export default async function Home() {
	const blueprints = await getAllBlueprints();
	const posts = await getAllPosts();
	const partners = await getAllPartners();
	
	const data = await getPage({title: "Főoldal"});
	const content = await html2md({html: data.content});

	return (
		<main className="flex flex-col pt-3">
			<Title className="text-xl md:text-6xl px-6">Csaladihazneked.hu</Title>
			<Subtitle className="px-6">Bemutatkozás</Subtitle>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{ content }
			</Markdown>
			<Subtitle className="pt-4 px-6">Partnereink</Subtitle>
			<hr className="pb-4" />
			<div className="px-6 flex w-full justify-evenly gap-4">
				{ partners.map((partner, index) => (
					<Partner partner={partner} key={index} />
				)) }
			</div>
			<Subtitle className="pt-6 px-6">Legutóbbi híreink</Subtitle>
			<hr className="pb-4" />
			<div className="mx-6 grid grid-cols-5 gap-4">
				<PostMedium className="col-span-5 xl:col-span-4" post={posts[0]} />
				<Card className="justify-between hidden xl:flex">
					<CardHeader>
						<CardTitle className="font-serif">
							<Balancer>Minden bejegyzés</Balancer>
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex items-end">
						<Link href="/blog">
							<Button variant={"secondary"}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
			<Subtitle className="pt-6 px-6">Kiemelt tervrajzok</Subtitle>
			<hr className="pb-4" />
			<BlueprintMediumCarousel className={"px-6"} blueprints={ blueprints } />
			<div className="flex flex-col w-full justify-between items-baseline">
				<div className="w-full">
					<Subtitle className="pt-6 px-6" id="elerhetosegek">Elérhetőségek</Subtitle>
					<hr className="pb-4" />
				</div>
				<div className="px-6">
					<div className="flex sm:flex-row flex-col gap-x-4 pb-4 select-all">
						{ process.env.NEXT_PUBLIC_PHONE_NUMBER !== undefined ?
							<div>
								<span className="font-bold">Tel.: </span>
								<Link href={`tel:${ process.env.NEXT_PUBLIC_PHONE_NUMBER }`}>
									{ process.env.NEXT_PUBLIC_PHONE_NUMBER }
								</Link>
							</div>
						: null }
						{ process.env.NEXT_PUBLIC_EMAIL_ADDRESS !== undefined ?
							<div>
								<span className="font-bold">Email: </span>
								<Link href={`mailto:${ process.env.NEXT_PUBLIC_EMAIL_ADDRESS }`}>
									{ process.env.NEXT_PUBLIC_EMAIL_ADDRESS }
								</Link>
							</div>
						: null }
					</div>
				</div>
			</div>
			<EmailExtendedFooter />
		</main>
	);
}
