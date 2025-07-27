"use client";
import InvoiceCard from "@/components/invoices/InvoiceCard";
import { Menu, Button, Text, Stack, Checkbox } from "@mantine/core";
import { IconChevronDown, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [filters, setFilters] = useState<"draft" | "pending" | "paid" | null>(
		null
	);
	const toggleFilter = (filter: "draft" | "pending" | "paid") => {
		setFilters((prev) => (prev === filter ? null : filter));
	};
	return (
		<main className='space-y-6 md:p-8 p-4'>
			<section className='flex items-center justify-between'>
				<Stack gap={0} justify='flex-start'>
					<Text fw={700}>Invoices</Text>
					<Text size='xs' className='flex gap-1'>
						<span className='hidden md:block'>There are</span> {7}
						<span className='hidden md:block'> total</span> invoices
					</Text>
				</Stack>
				<div className='flex items-end gap-1'>
					<Menu shadow='md' width={200}>
						<Menu.Target>
							<Button
								variant='transparent'
								rightSection={<IconChevronDown size={14} />}
							>
								Filter by
							</Button>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								onClick={() => toggleFilter("draft")}
								leftSection={
									<Checkbox checked={filters === "draft"} readOnly />
								}
							>
								Draft
							</Menu.Item>
							<Menu.Item
								onClick={() => toggleFilter("pending")}
								leftSection={
									<Checkbox checked={filters === "pending"} readOnly />
								}
							>
								Pending
							</Menu.Item>
							<Menu.Item
								onClick={() => toggleFilter("paid")}
								leftSection={<Checkbox checked={filters === "paid"} readOnly />}
							>
								Paid
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
					<Button
						component={Link}
						href='/invoices/new'
						radius={100}
						leftSection={<IconPlus size={14} />}
					>
						New <span className='hidden md:block ml-2'>Invoice</span>
					</Button>
				</div>
			</section>
			<section className='space-y-4'>
				<InvoiceCard id='RT3080' />
			</section>
		</main>
	);
}
