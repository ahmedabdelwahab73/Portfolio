import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.scss";

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar, Footer, Preloader } from "./components/legacy";
import { CursorGlow } from "./components/legacy/3d";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ahmed Ibrahim | Mid-Level Frontend Developer",
	description: "Professional Portfolio of Ahmed Ibrahim - Mid-Level Frontend Developer with 3+ years of experience building modern web applications.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${inter.variable} ${playfair.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<Preloader />
					<CursorGlow />
					<main className="relative min-h-screen">
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
