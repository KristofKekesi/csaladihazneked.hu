import { Header, Subtitle, Title } from "@/components/general/Typography";
import { getPages } from "@/lib/filter_data";
import html2md from "@/lib/html2md";
import Markdown from "@/components/general/MarkDown";
import { Metadata } from "next";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const metadata: Metadata = {
	title: "ÁSZF"
};

/**
 * @returns The page for /aszf
 */
export default async function Aszf() {
	const data = ( await getPages({ title: "ÁSZF", unique: true }) )[0];
	const content = await html2md({ html: data.content ?? "Nem található feltöltött ÁSZF." });

	return (
		<main className="flex flex-col just pt-3">
			<Title className="px-6 pb-2">ÁSZF</Title>
			<div className="flex justify-start md:justify-between
			items-start md:items-end flex-col md:flex-row">
				<Subtitle className="px-6">Általános szerződési feltételek</Subtitle>
				{ data.lastEdit ?
					<Header className="px-6">
						<span className="mr-2">Legutóbbi módosítás:</span>
						{ new Date(data.lastEdit).toLocaleDateString("hu-HU") }
					</Header>
				: null }
			</div>
			<hr className="pb-4" />
			<Markdown className="px-6">
				{ content }
			</Markdown>
		</main>
	);
}
