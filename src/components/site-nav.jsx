"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TransitionLink from "./transition-link";

const defaultLinks = [
  { label: "RSVP", href: "/rsvp" },
  { label: "Story", href: "/story" },
  { label: "Schedule", href: "/schedule" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Replace the link for the *current* page with Home, in the same position.
  // We only do this after mount to avoid SSR/client hydration mismatches.
  const links = defaultLinks.map((link) => {
    const isCurrent = mounted && pathname === link.href && pathname !== "/";

    return {
      label: isCurrent ? "Home" : link.label,
      href: isCurrent ? "/" : link.href,
      // Keep the key stable even if label/href changes.
      key: link.href,
    };
  });

  return (
    <nav className="pointer-events-auto fixed bottom-8 left-1/2 z-50 flex w-full max-w-3xl -translate-x-1/2 flex-wrap items-center justify-center gap-8 px-6 text-xs uppercase tracking-[0.35em] text-[#e6d8cf] drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] sm:text-sm">
      {links.map((link) => (
        <TransitionLink
          className="transition hover:text-white"
          href={link.href}
          key={link.key}
        >
          {link.label}
        </TransitionLink>
      ))}
    </nav>
  );
}
