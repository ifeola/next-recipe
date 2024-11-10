"use client";

import { Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactSVGElement } from "react";

type NavLinks = {
  name: string;
  href: string;
};

const Header = () => {
  const navLinks: NavLinks[] = [
    {
      name: "all tasks",
      href: "/",
    },
    {
      name: "ongoing tasks",
      href: "/ongoing",
    },
    {
      name: "completed tasks",
      href: "/completed",
    },
    {
      name: "deleted tasks",
      href: "/deleted",
    },
  ];

  const pathname: string = usePathname();
  console.log(pathname);

  return (
    <header className="border border-neutral-700 h-full rounded-md bg-white/5">
      <nav className="h-full flex flex-col items-start justify-between">
        <Link href="/" className="text-2xl flex items-center gap-2 pl-4 mt-4">
          <span className="block w-6 h-6 bg-teal-600 before:contents before:w-full before:h-full before:bg-teal-950 before:ml-2 before:mt-2"></span>
          <h4>Logo</h4>
        </Link>

        <ul className="grid w-full">
          {navLinks.map((link, index) => {
            const isActive = pathname.endsWith(link.href);

            return (
              <li className="w-full" key={index}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 hover:bg-neutral-800 w-full block border-r-4 border-transparent hover:border-r-teal-600 capitalize transition-all ${
                    isActive ? "border-r-teal-600 bg-neutral-800" : ""
                  }`}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="flex items-center gap-2 p-4 w-full">
          <Settings />
          <span>Settings</span>
        </button>
      </nav>
    </header>
  );
};
export default Header;
