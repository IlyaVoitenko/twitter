import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { Session } from "../../../../shared/interfaces.types";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: process.env.MAIL_FROM || "NextAuth.js <no-reply@example.com>",
    // }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      console.log("account", token, account);
      console.log("token", token);
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.provider = token.provider as string | undefined;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
