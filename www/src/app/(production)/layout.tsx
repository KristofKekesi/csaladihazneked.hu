import "@/app/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { type Metadata, Viewport } from "next";
import Footer from "@/components/general/footer/Footer";
import { GeistSans } from "geist/font";
import Header from "@/components/general/header/Header";
import localFont from "next/font/local";
import { Provider } from "react-wrap-balancer";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

export const metadata: Metadata = {
	title: {
		template: "%s | Családiház tervezés",
		default: "Családiház tervezés"
	},
	description: "todo",
	keywords: [
		"családiház", "családiház tervezés", "tervrajz", "tervrajz készítés", "építész"
	],
	authors: [{ name: "Kékesi Kristóf", url: "https://www.kekesi.dev" }],
	formatDetection: {
		email: true, address: false, telephone: true
	},
};

export const viewport: Viewport = {
themeColor: "#BABEAE"
};

const Caprasimo = localFont({
	src: "../../fonts/Caprasimo-Regular.ttf",
	display: "swap",
	variable: "--font-caprasimo"
});

/**
 * Root layout.
 * @return Root layout.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${GeistSans.className} ${Caprasimo.variable} max-w-full`}>
				<Provider>
					<div className="flex flex-col justify-between min-h-[100vh]">
						<div>
							<Header />
							<main className="-translate-y-6 pt-3">
								{children}
							</main>
						</div>
						<Footer />
					</div>
				</Provider>
			</body>
			{ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? 
				<GoogleAnalytics gaId={ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID } />
			: null }
			{ process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?
				<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
			: null }
		</html>
	);
}
