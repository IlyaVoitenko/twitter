import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    const signInUrl = new URL("/auth/signin", req.url);
    console.log("middleware redirecting to:", signInUrl.toString());
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
};
export const config = {
  matcher: ["/profile/:path*"],
};
