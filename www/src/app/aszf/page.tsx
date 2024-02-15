import { Header, Subtitle, Title } from "@/components/general/Typography";
import { getPages } from "@/lib/filter_data";
import html2md from "@/lib/html2md";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "ÁSZF"
};

/**
 * @returns The page for /aszf
 */
export default async function Aszf() {
	const data = ( await getPages({ title: "ÁSZF", unique: true }) )[0];
	const content = await html2md({ html: data.content });

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6">ÁSZF</Title>
			<div className="flex justify-start md:justify-between
			items-start md:items-end flex-col md:flex-row">
				<Subtitle className="px-6">Általános szerződési feltételek</Subtitle>
				<Header className="px-6">Legutóbbi módosítás: 2024/01/24</Header>
			</div>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{ content }
			</Markdown>
		</main>
	);
}
