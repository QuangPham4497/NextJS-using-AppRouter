"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "About",
      url: "/about",
    },
    {
      id: 2,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 3,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 4,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();

  return (
    <div className="h-20 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg text-orange-400">
        Foods and Drinks Blog
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={signOut}
            className="p-1  bg-orange-300 rounded-3xl border-none"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
