import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("Teste");
  const token = request.cookies.get("auth_token")?.value;

  const signInURL = new URL("/signin", request.url);
  const dashboardURL = new URL("/dashboard", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/signin") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }

  if (request.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(dashboardURL);
  }
}

export const config = {
  matcher: ["/signin", "/dashboard/:path*"],
};
