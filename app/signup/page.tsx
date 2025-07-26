"use client";
import {
	Anchor,
	Button,
	Checkbox,
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

export default function page() {
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		validate: {
			email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
			password: (val) =>
				val.length <= 6
					? "Password should include at least 6 characters"
					: null,
		},
	});

	return (
		<Paper radius='md' p='lg' withBorder w={400} className='mx-auto mt-12'>
			<Text size='lg' fw={500}>
				Welcome to Invoincly
			</Text>

			<Divider label='Sign up with email' labelPosition='center' my='lg' />

			<form onSubmit={form.onSubmit(() => {})}>
				<Stack>
					<TextInput
						label='Name'
						placeholder='Your name'
						value={form.values.name}
						onChange={(event) =>
							form.setFieldValue("name", event.currentTarget.value)
						}
						radius='md'
						required
					/>
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
						error={
							form.errors.password &&
							"Password should include at least 6 characters"
						}
						radius='md'
					/>

					<Checkbox
						label='I accept terms and conditions'
						checked={form.values.terms}
						onChange={(event) =>
							form.setFieldValue("terms", event.currentTarget.checked)
						}
					/>
				</Stack>

				<Group justify='space-between' mt='xl'>
					<Anchor component={Link} href='/login' c='dimmed' size='xs'>
						Already have an account? Login
					</Anchor>
					<Button type='submit' radius='xl'>
						Sign up
					</Button>
				</Group>
			</form>
		</Paper>
	);
}
