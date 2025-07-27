import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";

import { Drawer, ActionIcon, NavLink } from "@mantine/core";
import {
	IconMenu2,
	IconHome2,
	IconInvoice,
	IconSettings2,
	IconReportAnalytics,
	IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";

export default function DrawerMenu() {
	const [opened, { open, close }] = useDisclosure(false);
	const pathname = usePathname();

	return (
		<div className='md:hidden'>
			<Drawer opened={opened} onClose={close} size={"xs"} c={"black"}>
				<nav className='flex flex-col items-center gap-4 justify-center '>
					<NavLink
						href='/'
						component={Link}
						onClick={close}
						label='Home'
						variant='filled'
						active={pathname === "/"}
						leftSection={<IconHome2 size={16} stroke={1.5} />}
					/>
					<NavLink
						href='/invoices'
						component={Link}
						onClick={close}
						label='Invoices'
						variant='filled'
						active={pathname === "/invoices"}
						leftSection={<IconInvoice size={16} stroke={1.5} />}
					/>
					<NavLink
						href='/clients'
						component={Link}
						onClick={close}
						label='Clients'
						variant='filled'
						active={pathname === "/clients"}
						leftSection={<IconUsers size={16} stroke={1.5} />}
					/>
					<NavLink
						href='/analytics'
						component={Link}
						onClick={close}
						label='Analytics'
						variant='filled'
						active={pathname === "/analytics"}
						leftSection={<IconReportAnalytics size={16} stroke={1.5} />}
					/>
					<NavLink
						href='/settings'
						component={Link}
						onClick={close}
						label='Settings'
						variant='filled'
						active={pathname === "/settings"}
						leftSection={<IconSettings2 size={16} stroke={1.5} />}
					/>
				</nav>
			</Drawer>

			<ActionIcon variant='transparent' color='violet.2' onClick={open}>
				<IconMenu2 />
			</ActionIcon>
		</div>
	);
}
