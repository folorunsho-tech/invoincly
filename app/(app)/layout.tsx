import React from "react";
import type { Metadata } from "next";
import NavMenu from "@/components/navs/NavMenu";

export const metadata: Metadata = {
	title: "Invoicly",
	description: "Invoicing made easy by Folorunsho Ibrahim",
};
const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<NavMenu />
			{children}
		</>
	);
};

export default AuthLayout;
