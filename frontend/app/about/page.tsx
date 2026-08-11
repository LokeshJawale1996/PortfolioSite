import { profile } from "@/data/profile";

const strengths = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, scalable and maintainable interfaces with modern frontend technologies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M8 7L3 12L8 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16 7L21 12L16 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 4L10 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Performance & UX",
    description:
      "Focused on creating fast, accessible and intuitive experiences that users enjoy.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M4 16L8 12L11 15L20 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M15 6H20V11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Clean Architecture",
    description:
      "Writing reusable components and structured code that is easier to understand and maintain.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M10 7H14"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M17 10V14"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M7 10V17H14"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },

  {
    title: "Problem Solving",
    description:
      "Breaking complex requirements into practical, reliable and user-focused solutions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M9 18H15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M10 21H14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8.5 15.5C7.2 14.5 6.5 12.9 6.5 11C6.5 7.9 8.9 5.5 12 5.5C15.1 5.5 17.5 7.9 17.5 11C17.5 12.9 16.8 14.5 15.5 15.5C14.7 16.1 14.5 16.7 14.5 17H9.5C9.5 16.7 9.3 16.1 8.5 15.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "React Hooks",
  "Vue.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material UI",
  "Java",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Postman",
  "Swagger",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 sm:pt-36">

      {/* ====================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          -z-10
          h-96
          w-96
          rounded-full
          bg-blue-600/[0.07]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[40%]
          -z-10
          h-96
          w-96
          rounded-full
          bg-violet-600/[0.06]
          blur-[120px]
        "
      />

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
            HERO
        ================================================== */}

        <div className="max-w-4xl">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>

          </div>

          <h1
            className="
              text-5xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            A little more

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
              about me.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Get to know my experience, technical interests
            and the approach I bring to building modern web
            applications.
          </p>

        </div>

        {/* ==================================================
            PROFILE / STATS
        ================================================== */}

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Main Profile Card */}

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

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-52
                w-52
                rounded-full
                bg-blue-500/[0.08]
                blur-3xl
              "
            />

            <div className="relative">

              {/* Profile Header */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-violet-600
                    text-xl
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                  "
                >
                  L
                </div>

                <div>

                  <p className="text-lg font-semibold text-white">
                    Lokesh Jawale
                  </p>

                  <p className="mt-1 text-sm text-blue-400">
                    Front-End Developer
                  </p>

                </div>

              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

              {/* About Text */}

              <div className="space-y-5">

                {profile.about.map(
                  (paragraph) => (
                    <p
                      key={paragraph}
                      className="
                        text-base
                        leading-8
                        text-gray-400
                        sm:text-[17px]
                      "
                    >
                      {paragraph}
                    </p>
                  )
                )}

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

            {/* Experience */}

            <div
              className="
                group
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/20
              "
            >

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                Experience
              </p>

              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                5+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Years building web applications
              </p>

            </div>

            {/* Focus */}

            <div
              className="
                group
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/20
              "
            >

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                Primary Focus
              </p>

              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Frontend
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Modern UI & web applications
              </p>

            </div>

            {/* Location */}

            <div
              className="
                group
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/20
              "
            >

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                Location
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-white">
                {profile.location}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                India
              </p>

            </div>

          </div>

        </div>

        {/* ==================================================
            STRENGTHS
        ================================================== */}

        <div className="mt-20">

          <div className="mb-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              What I bring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How I approach my work.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  hover:bg-white/[0.035]
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/15
                    bg-blue-500/[0.07]
                    text-blue-400
                    transition
                    duration-300
                    group-hover:border-blue-500/30
                    group-hover:bg-blue-500/[0.12]
                  "
                >
                  {strength.icon}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {strength.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {strength.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* ==================================================
            TECHNOLOGIES
        ================================================== */}

        <div className="mt-20">

          <div className="mb-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My technical toolkit.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
              Technologies I&apos;ve worked with across frontend,
              backend, testing and development workflows.
            </p>

          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              p-6
              sm:p-8
            "
          >

            <div className="flex flex-wrap gap-2.5">

              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-black/20
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-gray-400
                    transition
                    duration-200
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.06]
                    hover:text-blue-300
                  "
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* ==================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div
          className="
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/10
            bg-gradient-to-r
            from-blue-500/[0.05]
            via-transparent
            to-violet-500/[0.05]
            p-7
            sm:p-9
          "
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="text-2xl text-blue-400">
                ✦
              </div>

              <div>

                <p className="font-semibold text-white">
                  Always building. Always learning.
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  I enjoy learning new technologies,
                  solving challenging problems and turning
                  ideas into useful digital experiences.
                </p>

              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-gray-500">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              Open to opportunities

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}