import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
	let cookie = req.cookies.get("theme")
	const res = NextResponse.next()
	if (!cookie) {
		res.cookies.set({
			name: "theme",
			value: "light",
			path: "/",
		})
		cookie = res.cookies.get("theme")
		return res
	}

	if (req.nextUrl.pathname.startsWith("/admin")) {
		console.log("어드민 페이지")

		return NextResponse.redirect(new URL("/", req.url))
	}
}
