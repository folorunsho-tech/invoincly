import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider, mantineHtmlProps } from "@mantine/core";
const montserrat = Montserrat_Alternates({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Invoicly",
	description: "Invoicing made easy by Folorunsho Ibrahim",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' {...mantineHtmlProps}>
			<body className={`${montserrat.variable} antialiased`}>
				<MantineProvider defaultColorScheme='light'>{children}</MantineProvider>
			</body>
		</html>
	);
}
