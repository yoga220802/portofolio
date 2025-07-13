import type { Metadata } from "next";
import "./globals.css"; // Mengimpor style global yang sudah kita buat

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
			{/* Menerapkan font-sans (Inter) sebagai font default untuk seluruh body.
        Kita bisa override ini dengan font-serif (Arvo) di komponen spesifik.
      */}
			<body className='font-sans'>{children}</body>
		</html>
	);
}
