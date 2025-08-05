import { checkToken } from "./middlewares/checkToken";
import { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  console.log(pathname.startsWith("/profile/:path*"));
  if (pathname.startsWith("/profile")) return checkToken(req);
};

export const config = {
  matcher: ["/profile/:path*"],
};
