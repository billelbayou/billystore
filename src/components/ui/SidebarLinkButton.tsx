"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface LinkButton {
  title: string;
  href: string;
  icon: ReactNode;
}

export default function SidebarLinkButton({
  LinkButton,
}: {
  LinkButton: LinkButton;
}) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(LinkButton.href);
  return (
    <Link
      href={`${LinkButton.href}`}
      className={`flex items-center w-full h-full hover:text-primary transition-all ${
        isActive ? "text-primary" : ""
      }`}
    >
      {LinkButton.icon}
      <p className="ml-3">{LinkButton.title}</p>
    </Link>
  );
}
