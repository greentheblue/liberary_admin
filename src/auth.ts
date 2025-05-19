import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { entityPrisma } from "@/lib/db"
import { compare } from "bcryptjs"
import type { JWT } from "next-auth/jwt"
import type { Session, DefaultSession } from "next-auth"

// Define a custom user type interface
interface CustomUser {
  name: string;
  email: string;
  id: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
          secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
    name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new Error("Please provide both email & password");
        }

        // Use Prisma to find the user
        const user = await entityPrisma.user.findUnique({
          where: {
            email: email
          }
        });        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not match");
        }

        // Ensure the returned object matches the CustomUser type
        const userResponse: CustomUser = {
          name: user.name,
          email: user.email,
          id: user.id,
        };

        return userResponse;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },  callbacks: {
    async session({ session, token }: { session: Session, token: JWT }) {
      if (token?.sub) {
        session.user = session.user || {};
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // No need to store additional properties
      }
      return token;
    },
  },

})