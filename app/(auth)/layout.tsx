import { PageTransitionProvider } from "@/context/PageTransitionContext";
import React from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </div>
  );
}
