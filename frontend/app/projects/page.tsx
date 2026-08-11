import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  // Remove the e-commerce project from the portfolio.
  // Adjust "ecommerce" if your actual slug is different.


  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pb-24
        pt-32
        sm:pt-36
      "
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
          top-[35%]
          -z-10
          h-96
          w-96
          rounded-full
          bg-violet-600/[0.06]
          blur-[120px]
        "
      />

      {/* ====================================================
          GRID BACKGROUND
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
            HERO
        ================================================== */}

        <div className="max-w-4xl">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Projects
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
            Things I&apos;ve

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
              built & worked on.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-500
              sm:text-lg
            "
          >
            A collection of professional and personal projects
            showcasing my experience in frontend development,
            modern web technologies and problem solving.
          </p>

        </div>

        {/* ==================================================
            PROJECT SUMMARY
        ================================================== */}

        <div className="mt-10 flex flex-wrap items-center gap-3">

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-4
              py-2.5
              text-xs
              font-medium
              text-gray-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            {projects.length} Featured Projects

          </div>

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-4
              py-2.5
              text-xs
              font-medium
              text-gray-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            React · Next.js · TypeScript

          </div>

        </div>

        {/* ==================================================
            PROJECTS
        ================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map(
            (project, index) => (
              <article
                key={project.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  hover:bg-white/[0.035]
                "
              >

                {/* =================================================
                    PROJECT VISUAL
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-60
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-white/[0.06]
                    bg-gradient-to-br
                    from-blue-500/[0.08]
                    via-transparent
                    to-violet-500/[0.08]
                  "
                >

                  {/* Grid */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.05]
                      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                      [background-size:32px_32px]
                    "
                  />

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      h-32
                      w-32
                      rounded-full
                      bg-blue-500/[0.12]
                      blur-3xl
                      transition
                      duration-500
                      group-hover:bg-blue-500/[0.2]
                    "
                  />

                  {/* Browser-style mockup */}

                  <div
                    className="
                      relative
                      w-[78%]
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.1]
                      bg-[#0b1120]/90
                      shadow-2xl
                      shadow-black/30
                      transition
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:scale-[1.02]
                    "
                  >

                    {/* Browser Header */}

                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        border-b
                        border-white/[0.06]
                        px-3
                        py-2
                      "
                    >

                      <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />

                      <div className="ml-2 h-2 flex-1 rounded-full bg-white/[0.05]" />

                    </div>

                    {/* Fake Content */}

                    <div className="space-y-3 p-5">

                      <div className="h-3 w-1/3 rounded-full bg-blue-500/30" />

                      <div className="h-2 w-4/5 rounded-full bg-white/[0.07]" />

                      <div className="h-2 w-3/5 rounded-full bg-white/[0.05]" />

                      <div className="grid grid-cols-3 gap-2 pt-2">

                        <div className="h-10 rounded-lg bg-white/[0.04]" />
                        <div className="h-10 rounded-lg bg-blue-500/[0.08]" />
                        <div className="h-10 rounded-lg bg-white/[0.04]" />

                      </div>

                    </div>

                  </div>

                  {/* Project Number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-black/20
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      tracking-wider
                      text-gray-500
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div className="p-6 sm:p-7">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h2
                        className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-white
                          sm:text-2xl
                        "
                      >
                        {project.title}
                      </h2>

                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-blue-400/80">
                        Featured Project
                      </p>

                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        text-gray-500
                        transition
                        duration-300
                        group-hover:border-blue-500/20
                        group-hover:bg-blue-500/[0.07]
                        group-hover:text-blue-400
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </div>

                  </div>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-gray-500
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                            px-3
                            py-1.5
                            text-xs
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
                      )
                    )}

                  </div>

                  {/* View Project */}

                  {/* <Link
                    href={`/projects/${project.slug}`}
                    className="
                      group/link
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-blue-400
                      transition
                      hover:text-blue-300
                    "
                  >
                    View Project

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                        h-4
                        w-4
                        transition
                        duration-300
                        group-hover/link:translate-x-1
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

                  </Link> */}

                </div>

              </article>
            )
          )}

        </div>

        {/* ==================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div
          className="
            mt-12
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

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="font-semibold text-white">
                More projects coming soon.
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                I&apos;m continuously building, learning and
                experimenting with new technologies.
              </p>

            </div>

            <span
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-green-500/15
                bg-green-500/[0.05]
                px-3
                py-2
                text-xs
                font-medium
                text-green-400
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

              Always building

            </span>

          </div>

        </div>

      </div>
    </main>
  );
}