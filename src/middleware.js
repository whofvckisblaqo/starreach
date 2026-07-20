import { NextResponse } from "next/server";

const MAINTENANCE_MODE = false; // ← changed to false

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (
    url.pathname === "/maintenance" ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  if (MAINTENANCE_MODE) {
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};