import "@/app/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { type Metadata, Viewport } from "next";
import Footer from "@/components/general/footer/Footer";
import { GeistSans } from "geist/font";
import Header from "@/components/general/header/Header";
import localFont from "next/font/local";
import { Provider } from "react-wrap-balancer";


export const metadata: Metadata = {
	title: "Családiház tervezés",
	description: "todo"
};


export const viewport: Viewport = {
themeColor: "#BABEAE"
};

const Caprasimo = localFont({
	src: "../fonts/Caprasimo-Regular.ttf",
	display: "swap",
	variable: "--font-caprasimo"
});


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
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!} />
		</html>
	);
}
