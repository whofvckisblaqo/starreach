import { NextResponse } from "next/server";

const MAINTENANCE_MODE = true; // ← change to false to turn off

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Allow maintenance page and static files through
  if (
    url.pathname === "/maintenance" ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to maintenance page
  if (MAINTENANCE_MODE) {
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};