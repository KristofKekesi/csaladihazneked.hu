import PostBigCarousel from "@/components/blog/PostBigCarousel";
import PostMedium from "@/components/blog/PostMedium";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IMG = "https://damassets.autodesk.net/content/" +
"dam/autodesk/www/solutions/generative-design/fy22/images/" + 
"blueprint-maker/what-difference-blueprints-floor-plans-thumb-1172x660.jpg";

export default function Blog() {
return (
	<main className="flex flex-col just pt-3">
	<h1 className="text-6xl px-6 font-caprasimo">Blog</h1>
	<h1 className="text-2xl font-bold font-serif px-6">Kiemelt bejegyzések</h1>
	<hr className="pb-4" />
	<PostBigCarousel className="px-0 xl:px-6" />
	<h1 className="text-2xl font-bold font-serif pt-6 px-6">Minden bejegyzés</h1>
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
	<h1 className="text-2xl font-bold font-serif px-6 pt-6">Feliratkozás a hírlevélre</h1>
	<hr className="pb-4" />
	<div className="mx-6 -mb-6 px-6 pt-6 pb-6 grid grid-cols-5 justify-between items-end
	gap-x-4 gap-y-2 rounded-t-3xl text-black/75 bg-[#BABEAE]">
		<div className="col-span-5 flex flex-col ml-2 mb-4">
			<h3 className="text-2xl font-bold font-serif">
				Szeretnél emailben értesülni a legfrissebb híreinkről?
			</h3>
			<p className="text-black/75">
				Az emailcímed megadásával elsőrorban értesülhetsz a legújabb tartalmainkról.
			</p>
		</div>
		<div className="flex flex-col items-start col-span-4">
			<Label
				className="text-base font-normal ml-2"
				htmlFor="email"
			>
					Emailcím:
			</Label>
			<Input
				id="email"
				type="email"
				className="bg-white/40 focus:bg-white/20 hover:bg-white/30
				border-2 border-dashed focus:border-white border-transparent
				transition-colors w-full"
			/>
		</div>
			<button
				type="submit"
				className="py-1 px-2 rounded-md bg-white hover:bg-white/80
				transition-colors col-span-1 h-10"
			>
				Feliratkozás
			</button>
		</div>
	</main>
);
}
