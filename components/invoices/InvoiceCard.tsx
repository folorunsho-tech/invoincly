import { Button, Group, NumberFormatter, Paper, Text } from "@mantine/core";
import { IconChevronRight, IconPointFilled } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const InvoiceCard = ({ id }: { id: string }) => {
	return (
		<Paper
			p='md'
			withBorder
			shadow='sm'
			maw={900}
			mx={"auto"}
			component={Link}
			href={`/invoices/${id}`}
		>
			<div className='flex justify-between items-center max-md:gap-3.5 flex-wrap '>
				<Text fw={600} fz={14} className='order-1'>
					<span className='text-violet-400'>#</span>
					{id}
				</Text>
				<Text fw={500} fz={14} c='dimmed' className='order-2'>
					Due 19 Aug 2021
				</Text>
				<Text fw={500} fz={14} c='dimmed' className='order-3 max-md:order-1'>
					Jensen Huang
				</Text>
				<Text fw={600} fz={16} className='order-3'>
					<NumberFormatter value={1800.9} prefix='£' />
				</Text>

				<Group className='cursor-pointer flex items-center gap-3 order-4 max-md:order-4 '>
					<Button
						className='pointer-events-none'
						variant='light'
						color='teal'
						leftSection={<IconPointFilled size={14} />}
					>
						Paid
					</Button>
					<IconChevronRight size={14} />
				</Group>
			</div>
		</Paper>
	);
};

export default InvoiceCard;
