import type { Metadata } from "next";
import { Arvo, Inter } from "next/font/google";
import "./globals.css";

// Konfigurasi font Arvo
const arvo = Arvo({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-arvo",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Yoga A. | Software Engineer & AI Enthusiast",
	description:
		"Portfolio pribadi Yoga Agustiansyah, seorang software engineer dan peminat AI.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${arvo.variable} ${inter.variable} font-serif bg-navy text-slate`}>
				{children}
			</body>
		</html>
	);
}
