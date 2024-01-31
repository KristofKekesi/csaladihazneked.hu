import { Header, Subtitle, Title } from "@/components/general/Typography";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "ÁSZF"
};


export default async function Aszf() {
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
				Süti recept
			</Markdown>
		</main>
	);
}
