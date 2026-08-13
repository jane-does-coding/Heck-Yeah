import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-jakarta",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
	variable: "--font-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500"],
});

export const metadata: Metadata = {
	title: "Hack Yeah! Build an interactive web comic",
	description:
		"Build an interactive web comic, log the hours you spend on it, and spend those hours on real items. A Hack Club You Ship, We Ship programme running 22 July to 14 August 2026.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${jakarta.variable} ${plexMono.variable}`}
		>
			<body className="min-h-dvh bg-void font-sans text-ink antialiased">
				{children}
			</body>
		</html>
	);
}
