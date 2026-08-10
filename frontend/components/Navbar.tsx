"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Projects",
    href: "/projects"
  },
  {
    name: "Experience",
    href: "/experience"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b12]/90 backdrop-blur-md">

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-xl font-bold text-white"
        >
          Lokesh<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-blue-500/50 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500/10"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Navigation */}

      {isOpen && (
        <div className="border-t border-white/10 bg-[#080b12] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-lg border border-blue-500/50 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500/10"
            >
              Resume
            </a>

          </div>

        </div>
      )}

    </header>
  );
}