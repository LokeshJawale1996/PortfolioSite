import Link from "next/link";
import { profile } from "@/data/profile";

const highlights = [
  {
    value: "5+",
    label: "Years Experience",
    description: "Building modern web applications",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8 6V4H16V6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M4 11H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },

  {
    value: "10+",
    label: "Technologies",
    description: "Modern frontend ecosystem",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
    ),
  },

  {
    value: "React",
    label: "Primary Frontend",
    description: "Component-driven development",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(60 12 12)"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(-60 12 12)"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="12"
          cy="12"
          r="1.7"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    value: "Full Stack",
    label: "Development Knowledge",
    description: "Frontend + backend understanding",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M7 5L3.5 12L7 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M17 5L20.5 12L17 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 3L10 21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Vue.js",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* ====================================================
          BACKGROUND GLOW
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          -z-10
          h-80
          w-80
          rounded-full
          bg-blue-600/[0.06]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          -z-10
          h-80
          w-80
          rounded-full
          bg-violet-600/[0.05]
          blur-[100px]
        "
      />

      {/* ====================================================
          SUBTLE GRID
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="mx-auto max-w-6xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-14 max-w-3xl">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>

          </div>

          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Turning ideas into

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-400
                via-blue-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              meaningful web experiences.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500">
            A little about my approach, experience and the
            technologies I use to turn ideas into reliable,
            scalable and user-friendly products.
          </p>

        </div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* =================================================
              LEFT — ABOUT CONTENT
          ================================================= */}

          <div>

            {/* Profile Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                sm:p-9
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-3xl
                "
              />

              <div className="relative">

                {/* Small label */}

                <div className="mb-6 flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      text-blue-400
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M5 20C5.8 16.8 8.2 15 12 15C15.8 15 18.2 16.8 19 20"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Who I am
                    </p>

                    <p className="text-xs text-gray-500">
                      Front-End Developer
                    </p>

                  </div>

                </div>

                {/* Paragraphs */}

                <div className="space-y-5">

                  {profile.about.map(
                    (paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`
                          text-base
                          leading-8
                          ${index === 0
                            ? "text-gray-300"
                            : "text-gray-400"
                          }
                        `}
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                </div>

                {/* Skills */}

                <div className="mt-8 border-t border-white/[0.07] pt-7">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Core Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-lg
                          border
                          border-white/[0.08]
                          bg-white/[0.03]
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-gray-400
                          transition
                          duration-300
                          hover:border-blue-500/30
                          hover:bg-blue-500/[0.06]
                          hover:text-blue-300
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                {/* CTA */}

                <Link
                  href="/about"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    px-5
                    py-3
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
                  "
                >
                  More About Me

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

            </div>

          </div>

          {/* =================================================
              RIGHT — HIGHLIGHTS
          ================================================= */}

          <div>

            <div className="mb-5">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                At a glance
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                A quick look at my experience and technical
                background.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

              {highlights.map(
                (item, index) => (
                  <div
                    key={item.label}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      p-6
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/20
                      hover:bg-white/[0.04]
                    "
                  >

                    {/* Hover Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-blue-500/[0.06]
                        blur-2xl
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">

                      {/* Icon */}

                      <div
                        className="
                          mb-5
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-white/[0.035]
                          text-blue-400
                          transition
                          duration-300
                          group-hover:border-blue-500/20
                          group-hover:bg-blue-500/10
                        "
                      >
                        {item.icon}
                      </div>

                      {/* Value */}

                      <p
                        className="
                          text-3xl
                          font-bold
                          tracking-tight
                          text-white
                        "
                      >
                        {item.value}
                      </p>

                      {/* Label */}

                      <p className="mt-2 text-sm font-medium text-gray-300">
                        {item.label}
                      </p>

                      {/* Description */}

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>

                    </div>

                    {/* Number */}

                    <span className="absolute bottom-4 right-5 text-[10px] font-medium text-gray-700">
                      0{index + 1}
                    </span>

                  </div>
                )
              )}

            </div>

            {/* Bottom Statement */}

            <div
              className="
                mt-4
                rounded-2xl
                border
                border-blue-500/10
                bg-gradient-to-r
                from-blue-500/[0.05]
                to-violet-500/[0.05]
                p-5
              "
            >

              <div className="flex items-start gap-3">

                <span className="mt-0.5 text-lg text-blue-400">
                  ✦
                </span>

                <p className="text-sm leading-6 text-gray-400">
                  I enjoy solving complex UI problems,
                  improving application performance and
                  creating experiences that feel simple
                  and intuitive.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}