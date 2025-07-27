"use client";
import {
	IconHome2,
	IconInvoice,
	IconReportAnalytics,
	IconSettings2,
	IconUsers,
} from "@tabler/icons-react";
import React from "react";
import { UserMenu } from "./UserMenu";
import DrawerMenu from "./DrawerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavMenu = () => {
	const pathname = usePathname();
	return (
		<nav
			className='flex items-center justify-between shadow-sm px-4 py-1 '
			style={{ backgroundColor: "#1E2139" }}
		>
			<h2 className='text-xl font-bold text-white'>Invoincly</h2>

			<nav className='md:flex items-center gap-4 justify-center hidden text-white'>
				<Link
					className='flex gap-2 items-center w-full transition duration-200 ease-in-out data-[active]:bg-[#7C5DFA]  hover:bg-[#7C5DFA] px-3 py-2.5'
					data-active={`/` === pathname || undefined}
					href={`/`}
				>
					<IconHome2 size={16} stroke={1.5} />
					<span className='text-sm'>Home</span>
				</Link>
				<Link
					className='flex gap-2 items-center w-full transition duration-200 ease-in-out data-[active]:bg-[#7C5DFA]  hover:bg-[#7C5DFA] px-3 py-2.5'
					data-active={`/invoices` === pathname || undefined}
					href={`/invoices`}
				>
					<IconInvoice size={16} stroke={1.5} />
					<span className='text-sm'>Invoices</span>
				</Link>
				<Link
					className='flex gap-2 items-center w-full transition duration-200 ease-in-out data-[active]:bg-[#7C5DFA]  hover:bg-[#7C5DFA] px-3 py-2.5'
					data-active={`/clients` === pathname || undefined}
					href={`/clients`}
				>
					<IconUsers size={16} stroke={1.5} />
					<span className='text-sm'>Clients</span>
				</Link>
				<Link
					className='flex gap-2 items-center w-full transition duration-200 ease-in-out data-[active]:bg-[#7C5DFA]  hover:bg-[#7C5DFA] px-3 py-2.5'
					data-active={`/analytics` === pathname || undefined}
					href={`/analytics`}
				>
					<IconReportAnalytics size={16} stroke={1.5} />
					<span className='text-sm'>Analytics</span>
				</Link>
				<Link
					className='flex gap-2 items-center w-full transition duration-200 ease-in-out data-[active]:bg-[#7C5DFA]  hover:bg-[#7C5DFA] px-3 py-2.5'
					data-active={`/settings` === pathname || undefined}
					href={`/settings`}
				>
					<IconSettings2 size={16} stroke={1.5} />
					<span className='text-sm'>Settings</span>
				</Link>
			</nav>
			<div className='flex items-center gap-2'>
				<DrawerMenu />
				<UserMenu />
			</div>
		</nav>
	);
};

export default NavMenu;
