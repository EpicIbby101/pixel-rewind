"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import github from "@/public/github-logo.png";
import linkedin from "@/public/linkedin.png";
import { useSearchParams } from "next/navigation";

const links = [
  {
    href: "/nintendo",
    label: "Nintendo",
  },
  {
    href: "/sega",
    label: "Sega",
  },
  {
    href: "/playstation",
    label: "Playstation",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-emerald-600 top-0 w-full z-50">
      <nav
        className="container flex items-center justify-between px-5 sm:px-0 md:px-0 lg:px-4 py-3 mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0"
            href="/"
            title="Homepage"
          >
            <Image
              src={Logo}
              alt="Logo"
              className="w-10"
              placeholder="blur"
              priority={true}
            />

            <span className="font-semibold text-xl py- pr-5">
              My Childhood Games
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden ml-auto">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center lg:justify-end lg:flex-1">
          <div className="hidden lg:flex lg:justify-center lg:gap-3 lg:items-center">
            {links.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  key={link.href}
                  className="link link-hover block py-2 md:py-0 md:inline-block hover:text-gray-500 duration-300"
                  title={link.label}
                >
                  {link.label}
                </Link>
                {index <= links.length - 1 && (
                  <span className="hidden md:inline-block border-l border-gray-300 h-4 mx-3"></span>
                )}
              </React.Fragment>
            ))}
            
          </div>
          
        </div>
      </nav>

      <div className={`relative z-50 ${isMenuOpen ? "" : "hidden"} lg:hidden`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-emerald-600 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover hover:text-gray-600 hover:underline"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-4 border-t border-gray-300" />{" "}
          <div className="flex flex-row space-x-3">
            <Link
              className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
              href="https://www.linkedin.com/in/kevin-grittner-770465243/"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className="w-10"
                placeholder="blur"
                priority={true}
              />
            </Link>
            <Link
              className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
              href="https://github.com/EpicIbby101"
            >
              <Image
                src={github}
                alt="github"
                className="w-10"
                placeholder="blur"
                priority={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
