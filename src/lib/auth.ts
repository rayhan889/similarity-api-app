import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error("No clientID for google provider");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("No clientSecret for google provider");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const foundUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!foundUser) {
        token.id = user!.id;
        return token;
      }

      return {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        picture: foundUser.image,
      };
    },
    redirect() {
      return "/dashboard";
    },
  },
};
