"use client";
import { Menu, Button, Text, Stack, Group, Checkbox } from "@mantine/core";
import { useState } from "react";

export default function Home() {
	const [filters, setFilters] = useState<"draft" | "pending" | "paid" | null>(
		null
	);
	const toggleFilter = (filter: "draft" | "pending" | "paid") => {
		setFilters((prev) => (prev === filter ? null : filter));
	};
	return (
		<main>
			<section className='flex items-center justify-between'>
				<Stack gap={0}>
					<Text>Invoices</Text>
					<Text size='xs'>{7} invoices</Text>
				</Stack>
				<Group>
					<Menu shadow='md' width={200}>
						<Menu.Target>
							<Button variant='transparent'>Filter</Button>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								onClick={() => toggleFilter("draft")}
								leftSection={<Checkbox checked={filters === "draft"} />}
							>
								Draft
							</Menu.Item>
							<Menu.Item
								onClick={() => toggleFilter("pending")}
								leftSection={<Checkbox checked={filters === "pending"} />}
							>
								Pending
							</Menu.Item>
							<Menu.Item
								onClick={() => toggleFilter("paid")}
								leftSection={<Checkbox checked={filters === "paid"} />}
							>
								Paid
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</section>
			<section></section>
		</main>
	);
}
