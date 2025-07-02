import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { PageTransitionProvider } from "@/context/PageTransitionContext";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/"); // 🔒 Oturum varsa anasayfaya yönlendir
  }

  return (
    <div>
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </div>
  );
}