import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import { env } from "@/env";
import { CustomPrismaAdapter } from "@/lib/auth/prisma-adapter";

export const authOptions: AuthOptions = {
  adapter: CustomPrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return {
        ...session,
        user,
        token,
      };
    },
  },
  session: {
    maxAge: 60 * 60 * 24 * 3, // 3 days
    updateAge: 60 * 60 * 24,
  },
};
