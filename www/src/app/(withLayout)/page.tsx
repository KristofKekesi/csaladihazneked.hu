import { getBlueprints, getPages } from "@/lib/filter_data";
import { Subtitle, Title } from "@/components/general/Typography";
import BlueprintMediumCarousel from "@/components/blueprint/BlueprintMediumCarousel";
import EmailExtendedFooter from "@/components/extendedFooters/Email";
import { getAllPartners } from "@/lib/wp_api";
import html2md from "@/lib/html2md";
import Link from "next/link";
import Markdown from "@/components/general/MarkDown";
import Newsletter from "@/components/newsletter/NewsletterSignUp";
import { PartnerCarousel } from "@/components/index/PartnerCarousel";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * @returns Page for /.
 */
export default async function Home(): Promise<JSX.Element> {
	const highlightedBlueprints = await getBlueprints({ isHighlighted: true });
	const partners = await getAllPartners();
	
	const data = ( await getPages({title: "Főoldal", unique: true}) )[0];

	return (
		<main className="flex flex-col pt-3">
			<Title className="text-xl md:text-6xl px-6 pb-2">Csaladihazneked.hu</Title>
			{ data && data.content ? <>
				<Subtitle className="px-6">Bemutatkozás</Subtitle>
				<hr className="pb-4" />
				<Markdown className="px-6">
					{ await html2md({html: data.content}) }
				</Markdown>
			</> : null }
			{ partners.length > 0 ?
				<>
					<Subtitle className="pt-4 px-6">
						{ partners.length === 1 ? "Partnerünk" : "Partnereink"}
					</Subtitle>
					<hr className="pb-4" />
					<PartnerCarousel partners={ partners } />
				</>
			: null }
			{ highlightedBlueprints.length > 0 ?
				<>
					<Subtitle className="pt-6 px-6">Kiemelt tervrajzok</Subtitle>
					<hr className="pb-4" />
					<BlueprintMediumCarousel 
						className="px-6" 
						blueprints={ highlightedBlueprints }
					/>
				</>
			: null }
			<Newsletter title="Hírlevél" showWhereToOptOut className="rounded-t-lg" />
			<div className="flex flex-col w-full justify-between items-baseline">
				<div className="w-full">
					<Subtitle className="pt-6 px-6" id="elerhetosegek">Elérhetőségek</Subtitle>
					<hr className="pb-4" />
				</div>
				<div className="px-6">
					<div className="flex sm:flex-row flex-col gap-x-4 pb-4 select-all">
						{ process.env.NEXT_PUBLIC_PHONE_NUMBER !== "" ?
							<div>
								<span className="font-bold">Tel.: </span>
								<Link href={`tel:${ process.env.NEXT_PUBLIC_PHONE_NUMBER }`}
									className="py-4"
								>
									{ process.env.NEXT_PUBLIC_PHONE_NUMBER }
								</Link>
							</div>
						: null }
						{ process.env.NEXT_PUBLIC_EMAIL_ADDRESS !== "" ?
							<div>	
								<span className="font-bold">Email: </span>
								<Link href={`mailto:${ process.env.NEXT_PUBLIC_EMAIL_ADDRESS }`}
									className="py-4"
								>
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
