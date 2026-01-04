"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <main className="page-shell" key={pathname}>
      {children}
    </main>
  );
}
