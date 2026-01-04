"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionLink({ href, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    if (href === pathname) {
      return;
    }

    if (!document.startViewTransition) {
      event.preventDefault();
      router.push(href);
      return;
    }

    event.preventDefault();
    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
