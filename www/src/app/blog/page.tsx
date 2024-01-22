import { Subtitle, Title } from "@/components/general/Typography";
import MailingListExtendedFooter from "@/components/extendedFooters/mailingList";
import { Metadata } from "next";
import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";

const IMG = "https://damassets.autodesk.net/content/" +
"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg";


export const metadata: Metadata = {
	title: "Blog"
};


export default function Blog() {
return (
	<main className="flex flex-col just pt-3">
	<Title className="px-6">Blog</Title>
	<Subtitle className="px-6">Kiemelt bejegyzések</Subtitle>
	<hr className="pb-4" />
	<PostBigCarousel className="px-6" />
	<Subtitle className="pt-6 px-6">Minden bejegyzés</Subtitle>
	<hr className="a pb-4" />
	<section className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-3">
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Harmadik bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Második bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
		<PostMedium post={{
			id: 0,
			title: "Első bejegyzés",
			description: "Mi is ez itt?",
			imageURL: IMG,
			content: ""
		}} />
	</section>
	<Subtitle className="pt-6 px-6">Feliratkozás a hírlevélre</Subtitle>
	<hr className="pb-4" />
	<MailingListExtendedFooter />
	</main>
);
}
