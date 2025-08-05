import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export const checkToken = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("token", token);
  if (!token) {
    const signInUrl = new URL("/auth/signin", req.url);
    console.log("signInUrl :------", signInUrl, "  ", req.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
};
