import {
	IconChevronRight,
	IconLogout,
	IconSettings,
} from "@tabler/icons-react";
import { ActionIcon, Avatar, Group, Menu, Text } from "@mantine/core";
import { logout } from "@/actions/user";
import Link from "next/link";
export function UserMenu() {
	return (
		<Group justify='center' p={"xs"}>
			<Menu
				withArrow
				width={300}
				position='bottom'
				transitionProps={{ transition: "pop" }}
				withinPortal
			>
				<Menu.Target>
					<ActionIcon variant='default' radius={"xl"} size='lg'>
						<Avatar
							radius='xl'
							src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png'
						/>
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item rightSection={<IconChevronRight size={16} stroke={1.5} />}>
						<Group>
							<Avatar
								radius='xl'
								src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png'
							/>

							<div>
								<Text fw={500}>Nancy Eggshacker</Text>
								<Text size='xs' c='dimmed'>
									neggshaker@mantine.dev
								</Text>
							</div>
						</Group>
					</Menu.Item>

					<Menu.Divider />

					<Menu.Item
						component={Link}
						href='/settings'
						leftSection={<IconSettings size={16} stroke={1.5} />}
					>
						Account settings
					</Menu.Item>

					<Menu.Item
						color='red'
						leftSection={<IconLogout size={16} stroke={1.5} />}
						onClick={logout}
					>
						Logout
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
}
