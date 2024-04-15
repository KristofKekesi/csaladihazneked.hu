import { Metadata } from "next";
import NewsletterOptOut from "@/components/newsletter/NewsletterOptOut";
import NewsletterSignUp from "@/components/newsletter/NewsletterSignUp";
import { Separator } from "@/components/ui/Separator";
import { Title } from "@/components/general/Typography";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const metadata: Metadata = {
	title: "Hírlevél leiratkozás"
};

/**
 * @returns Page for /hirlevel/leiratkozas
 */
export default async function Blueprints() {
	return (
		<main className="flex flex-col just pt-3">
			<Title className="text-xl md:text-6xl px-6">Hírlevél</Title>
			<Separator />
			<NewsletterSignUp title="Feliratkozás" />
			<NewsletterOptOut title="Leiratkozás" />
		</main>
	);
}