"use client";
import {
	Anchor,
	Button,
	Divider,
	Group,
	LoadingOverlay,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { login } from "./actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function page() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
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
		<Paper
			radius='md'
			p='xs'
			withBorder
			w={350}
			className='mx-auto mt-12 relative'
		>
			<Text size='lg' fw={500}>
				Welcome back
			</Text>

			<Divider label='Login with email' labelPosition='center' my='lg' />

			<form
				onSubmit={form.onSubmit(async (values) => {
					setLoading(true);
					const { data, error } = await login(values);
					if (data.user) {
						setLoading(false);
						router.push("/");
					}
					if (error) {
						setLoading(false);
						form.setFieldError("email", "Invalid email or password");
					}
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
						type='email'
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
			<LoadingOverlay visible={loading} />
		</Paper>
	);
}
