import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Provider } from "react-wrap-balancer";

import "@/app/globals.css";

import { GeistSans } from "geist/font";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


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
					<Header />
					<main className="-translate-y-6 pt-3">
						{children}
					</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
