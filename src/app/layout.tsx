import type { Metadata } from "next";
import { Arvo, Markazi_Text } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

// Inisialisasi font untuk body (Arvo)
const arvo = Arvo({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-arvo",
});

// Inisialisasi font untuk heading (Markazi Text)
const markazi = Markazi_Text({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-markazi",
});

export const metadata: Metadata = {
	title: "Yoga's Portofolio",
	description: "Portofolio of Yoga, a Fullstack Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${arvo.variable} ${markazi.variable}`}>
			<body className='font-body bg-gray-900 text-white'>
				<Header />
				{children}
			</body>
		</html>
	);
}
