import Link from "next/link";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue.js",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Main blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.08]
          blur-[120px]
        "
      />

      {/* Violet glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          -z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-600/[0.06]
          blur-[100px]
        "
      />

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/3
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[100px]
        "
      />

      {/* =====================================================
          GRID BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto w-full max-w-6xl">

        <div className="max-w-4xl">

          {/* =================================================
              AVAILABILITY BADGE
          ================================================= */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-green-500/20
              bg-green-500/[0.06]
              px-4
              py-2
              text-sm
              text-green-400
            "
          >

            {/* Green status dot */}

            <span className="relative flex h-2.5 w-2.5">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-400
                "
              />

            </span>

            Available for new opportunities

          </div>

          {/* =================================================
              INTRODUCTION
          ================================================= */}

          <p
            className="
              mb-4
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-blue-400
            "
          >
            Hello, I&apos;m
          </p>

          {/* =================================================
              NAME
          ================================================= */}

          <h1
            className="
              text-6xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              sm:text-7xl
              md:text-8xl
            "
          >
            Lokesh Jawale
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-blue-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              .
            </span>
          </h1>

          {/* =================================================
              ROLE
          ================================================= */}

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-gray-200
                sm:text-3xl
                md:text-4xl
              "
            >
              Front-End Developer
            </h2>

            <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

            <span
              className="
                text-sm
                font-medium
                text-gray-500
                sm:text-base
              "
            >
              React · Next.js · TypeScript
            </span>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-gray-400
              sm:text-lg
            "
          >
            I build responsive, scalable and user-friendly
            web applications with a strong focus on clean
            architecture, performance and exceptional user
            experience.
          </p>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <div className="mt-8 flex flex-wrap gap-2.5">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  text-gray-400
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.06]
                  hover:text-blue-300
                "
              >
                {technology}
              </span>
            ))}

          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">

            {/* View Work */}

            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/10
                transition
                duration-300
                hover:-translate-y-0.5
                hover:from-blue-500
                hover:to-violet-500
                hover:shadow-blue-500/20
              "
            >
              View My Work

              {/* Arrow */}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  h-4
                  w-4
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </Link>

            {/* Contact */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-xl
                border
                border-white/10
                bg-white/[0.025]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-gray-300
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              Let&apos;s Connect

              {/* Arrow */}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  h-4
                  w-4
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </Link>

          </div>

          {/* =================================================
              QUICK INFO
          ================================================= */}

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">

            {/* Experience */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  text-blue-400
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 7H20V20H4V7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8 7V4H16V7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  5+ Years
                </p>

                <p className="text-xs text-gray-500">
                  Experience
                </p>

              </div>

            </div>

            {/* Divider */}

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            {/* Domain */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  text-blue-400
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M3.5 12H20.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M12 3.5C14.2 5.8 15.3 8.6 15.3 12C15.3 15.4 14.2 18.2 12 20.5C9.8 18.2 8.7 15.4 8.7 12C8.7 8.6 9.8 5.8 12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Web Applications
                </p>

                <p className="text-xs text-gray-500">
                  Frontend Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          DECORATIVE CORNER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-16
          right-10
          hidden
          h-32
          w-32
          rounded-full
          border
          border-blue-500/[0.08]
          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-24
          right-18
          hidden
          h-20
          w-20
          rounded-full
          border
          border-violet-500/[0.08]
          md:block
        "
      />

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-gray-600
          md:flex
        "
      >

        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-gray-500 to-transparent" />

      </div>

    </section>
  );
}