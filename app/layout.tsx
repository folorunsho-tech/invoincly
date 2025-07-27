import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
const montserrat = Montserrat({
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
			<body
				className={`${montserrat.variable} antialiased`}
				style={{
					fontFamily: "var(--font-montserrat)",
				}}
			>
				<MantineProvider
					theme={{
						primaryColor: "violet",
					}}
				>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
