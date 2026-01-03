"use client";

import { usePathname } from "next/navigation";

const defaultLinks = [
  { label: "RSVP", href: "/rsvp" },
  { label: "Story", href: "/story" },
  { label: "Schedule", href: "/schedule" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const links = defaultLinks.map((link, index) => {
    if (index === 1 && pathname !== "/") {
      return { label: "Home", href: "/" };
    }
    return link;
  });

  return (
    <nav className="pointer-events-auto fixed bottom-8 left-1/2 z-50 flex w-full max-w-3xl -translate-x-1/2 flex-wrap items-center justify-center gap-8 px-6 text-xs uppercase tracking-[0.35em] text-[#e6d8cf] drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] sm:text-sm">
      {links.map((link) => (
        <a
          className="transition hover:text-white"
          href={link.href}
          key={`${link.label}-${link.href}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
