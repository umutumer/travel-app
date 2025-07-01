import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({children}:RouteLayoutProps) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RouteLayout;
