"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
      <nav
        className="
          mx-auto
          max-w-6xl
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#080b12]/80
          shadow-2xl
          shadow-black/20
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-6">

          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2"
          >
            {/* Logo Mark */}

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-violet-600
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition
                duration-300
                group-hover:scale-105
                group-hover:shadow-blue-500/40
              "
            >
              L
            </div>

            {/* Logo Text */}

            <div className="hidden sm:block">
              <p className="text-base font-semibold tracking-tight text-white">
                Lokesh
                <span className="text-blue-500">.</span>
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                Frontend Developer
              </p>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 md:flex">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    group
                    relative
                    rounded-lg
                    px-3.5
                    py-2.5
                    text-sm
                    font-medium
                    transition
                    duration-300
                    ${active
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {/* Active / Hover Indicator */}

                  <span
                    className={`
                      absolute
                      bottom-1
                      left-1/2
                      h-0.5
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-violet-500
                      transition-all
                      duration-300
                      ${active
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* ==================================================
              DESKTOP RESUME BUTTON
          ================================================== */}

          <div className="hidden md:block">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-blue-500/30
                bg-blue-500/[0.08]
                px-4
                py-2.5
                text-sm
                font-medium
                text-blue-300
                transition
                duration-300
                hover:border-blue-400/50
                hover:bg-blue-500/[0.15]
                hover:text-blue-200
              "
            >
              {/* Download Icon */}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  h-4
                  w-4
                  transition
                  duration-300
                  group-hover:translate-y-0.5
                "
              >
                <path
                  d="M12 3V15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M7 11L12 16L17 11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M5 21H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              Resume
            </a>

          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-gray-300
              transition
              duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
              md:hidden
            "
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (

              /* Close Icon */

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            ) : (

              /* Menu Icon */

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            )}
          </button>

        </div>

        {/* ====================================================
            MOBILE NAVIGATION
        ==================================================== */}

        {isOpen && (
          <div
            className="
              border-t
              border-white/[0.07]
              px-4
              pb-5
              pt-4
              md:hidden
            "
          >

            <div className="space-y-1">

              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition
                      duration-200
                      ${active
                        ? "bg-blue-500/10 text-blue-300"
                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    {/* Active Arrow */}

                    {active && (
                      <span className="text-blue-400">
                        →
                      </span>
                    )}
                  </Link>
                );
              })}

            </div>

            {/* =================================================
                MOBILE RESUME
            ================================================= */}

            <div className="mt-4 border-t border-white/[0.07] pt-4">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setIsOpen(false)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  shadow-blue-500/10
                  transition
                  duration-300
                  hover:from-blue-500
                  hover:to-violet-500
                "
              >

                {/* Download Icon */}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 3V15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M7 11L12 16L17 11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M5 21H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>

                Download Resume

              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}