"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Links } from "./links";
import { Menu } from "./menu";

const links = [
  {
    title: "Works",
    path: "/works",
  },
  {
    title: "Posts",
    path: "/posts",
  },
  {
    title: "Source",
    path: "https://github.com/jamesedra/blog-portfolio",
  },
];

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    // Add event listener to window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarOpen(false); // Close the menu when window width is greater than 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 bg-neutral-900 sm:bg-zinc-900/70 border-b-2 border-stone-800 sm:border-none"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex flex-wrap mx-auto max-w-screen-2xl px-2 py-1 items-center justify-between w-[85%]">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              className="p-2 md:h-full"
              src="/images/book-brown.png"
              alt="Home"
              width={50}
              height={50}
              unoptimized
              style={{ filter: "invert(100%)" }}
            />
            <span className="hidden sm:block text-zinc-300 font-light text-lg ml-2">
              edra
            </span>
          </div>
        </Link>
        <div className="mobile-menu block sm:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <nav className="menu hidden sm:flex sm:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <Links href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {navbarOpen ? (
        <Menu links={links} onClick={() => setNavbarOpen(false)} />
      ) : null}
    </header>
  );
};
