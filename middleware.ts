import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { NextResponse } from "next/server";
import { createClient } from "./utils/supabase/server";

const PUBLIC_PATHS = [
	"/login",
	"/signup",
	"/verify-email",
	"/forgot-password",
	"/reset-password",
	"/terms",
	"/privacy-policy",
];

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (user && pathname.startsWith("/login")) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
		return NextResponse.next();
	}

	return await updateSession(req);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};
