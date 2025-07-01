"use client";

import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext({
  direction: "forward",
  setDirection: (dir: "forward" | "backward") => {},
});

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  return (
    <PageTransitionContext.Provider value={{ direction, setDirection }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageDirection = () => useContext(PageTransitionContext);
