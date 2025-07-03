import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string | null;
      lastName: string | null;
      email: string;
      token: JWT;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    firstName: string | null;
    lastName: string | null;
  }

  interface JWT {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
  }
}
