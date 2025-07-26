"use client";
import {
	Anchor,
	Button,
	Divider,
	Group,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { login } from "./actions";

export default function page() {
	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},

		validate: {
			email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
		},
	});

	return (
		<Paper radius='md' p='lg' withBorder w={400} className='mx-auto mt-12'>
			<Text size='lg' fw={500}>
				Welcome back
			</Text>

			<Divider label='Login with email' labelPosition='center' my='lg' />

			<form
				onSubmit={form.onSubmit((values) => {
					login(values);
				})}
			>
				<Stack>
					<TextInput
						required
						label='Email'
						placeholder='hello@mantine.dev'
						value={form.values.email}
						onChange={(event) =>
							form.setFieldValue("email", event.currentTarget.value)
						}
						error={form.errors.email && "Invalid email"}
						radius='md'
					/>

					<PasswordInput
						required
						label='Password'
						placeholder='Your password'
						value={form.values.password}
						onChange={(event) =>
							form.setFieldValue("password", event.currentTarget.value)
						}
						radius='md'
					/>
				</Stack>

				<Group justify='space-between' mt='xl'>
					<Anchor component={Link} href='/signup' c='dimmed' size='xs'>
						Don't have an account? Register
					</Anchor>
					<Button type='submit' radius='xl'>
						Login
					</Button>
				</Group>
			</form>
		</Paper>
	);
}
