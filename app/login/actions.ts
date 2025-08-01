"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: { email: string; password: string }) {
	const supabase = await createClient();
	const res = await supabase.auth.signInWithPassword(formData);

	if (res.error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	return res;
}
