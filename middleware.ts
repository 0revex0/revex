import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "fr", "ar"];
const CORE_ROUTES = ["home", "about", "work", "contact"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/static") || pathname === "/favicon.ico") {
    return;
  }

  // Never redirect the root Welcome page
  if (pathname === "/" ) {
    return;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return;

  const first = segments[0];

  // If the path already uses a supported locale, do nothing
  if (SUPPORTED.includes(first)) return;

  // If the path is one of the core app pages (no locale prefix), do nothing
  if (CORE_ROUTES.includes(first)) return;

  // Otherwise, do not redirect — let the app handle unknown routes
  return;
}

export const config = {
  matcher: "/:path*",
};
