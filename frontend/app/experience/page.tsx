import { experiences } from "@/data/experience";

export default function ExperiencePage() {
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
          GRID
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
              Experience
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
            My professional

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
              journey so far.
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
            A detailed look at the roles, responsibilities,
            technologies and experiences that have shaped
            my career as a developer.
          </p>

        </div>

        {/* ==================================================
            SUMMARY CARDS
        ================================================== */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-3
          "
        >

          {/* Experience */}

          <div
            className="
              group
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              transition
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/15
                  bg-blue-500/[0.07]
                  text-blue-400
                "
              >
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
                </svg>
              </div>

              <div>

                <p className="text-2xl font-bold text-white">
                  5+
                </p>

                <p className="text-xs text-gray-500">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

          {/* Roles */}

          <div
            className="
              group
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              transition
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-violet-500/15
                  bg-violet-500/[0.07]
                  text-violet-400
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                  />
                </svg>
              </div>

              <div>

                <p className="text-2xl font-bold text-white">
                  {experiences.length}
                </p>

                <p className="text-xs text-gray-500">
                  Professional Roles
                </p>

              </div>

            </div>

          </div>

          {/* Focus */}

          <div
            className="
              group
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              transition
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/15
                  bg-blue-500/[0.07]
                  text-blue-400
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>

                <p className="text-2xl font-bold text-white">
                  Frontend
                </p>

                <p className="text-xs text-gray-500">
                  Primary Focus
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            TIMELINE HEADER
        ================================================== */}

        <div className="mb-10 mt-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
            Career Timeline
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Where I&apos;ve worked.
          </h2>

        </div>

        {/* ==================================================
            TIMELINE
        ================================================== */}

        <div className="relative">

          {/* Timeline line */}

          <div
            className="
              absolute
              bottom-0
              left-[18px]
              top-0
              w-px
              bg-gradient-to-b
              from-blue-500/50
              via-blue-500/20
              to-transparent
              sm:left-[23px]
            "
          />

          <div className="space-y-10">

            {experiences.map(
              (experience, index) => (
                <article
                  key={experience.id}
                  className="group relative pl-12 sm:pl-16"
                >

                  {/* =================================================
                      TIMELINE NODE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      top-8
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-500/30
                      bg-[#080b12]
                      shadow-lg
                      shadow-blue-500/10
                      transition
                      duration-300
                      group-hover:border-blue-400/60
                      group-hover:shadow-blue-500/25
                      sm:h-12
                      sm:w-12
                    "
                  >

                    <span
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-blue-500
                        shadow-lg
                        shadow-blue-500/50
                        transition
                        duration-300
                        group-hover:scale-125
                        group-hover:bg-blue-300
                      "
                    />

                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      p-6
                      transition
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-blue-500/20
                      group-hover:bg-white/[0.035]
                      sm:p-8
                    "
                  >

                    {/* Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-48
                        w-48
                        rounded-full
                        bg-blue-500/[0.07]
                        blur-3xl
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">

                      {/* =================================================
                          TOP
                      ================================================= */}

                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                        <div className="flex items-start gap-4">

                          {/* Number */}

                          <div
                            className="
                              hidden
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/[0.08]
                              bg-white/[0.035]
                              text-xs
                              font-semibold
                              text-gray-500
                              sm:flex
                            "
                          >
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </div>

                          <div>

                            <h3
                              className="
                                text-xl
                                font-semibold
                                tracking-tight
                                text-white
                                sm:text-2xl
                              "
                            >
                              {experience.role}
                            </h3>

                            <p
                              className="
                                mt-1.5
                                text-sm
                                font-medium
                                text-blue-400
                                sm:text-base
                              "
                            >
                              {experience.company}
                            </p>

                          </div>

                        </div>

                        {/* Date */}

                        <div
                          className="
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.035]
                            px-3.5
                            py-2
                            text-xs
                            font-medium
                            text-gray-400
                          "
                        >

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500"
                          >
                            <rect
                              x="4"
                              y="5"
                              width="16"
                              height="15"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />

                            <path
                              d="M8 3V7"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />

                            <path
                              d="M16 3V7"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />

                            <path
                              d="M4 10H20"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                          </svg>

                          {experience.startDate}

                          <span className="text-gray-700">
                            —
                          </span>

                          {experience.endDate}

                        </div>

                      </div>

                      {/* =================================================
                          DIVIDER
                      ================================================= */}

                      <div className="my-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                      {/* =================================================
                          RESPONSIBILITIES
                      ================================================= */}

                      <div>

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
                          Responsibilities & Contributions
                        </p>

                        <ul className="space-y-4">

                          {experience.description.map(
                            (item) => (
                              <li
                                key={item}
                                className="
                                  flex
                                  items-start
                                  gap-3
                                  text-sm
                                  leading-7
                                  text-gray-400
                                  sm:text-[15px]
                                "
                              >

                                <span
                                  className="
                                    mt-[10px]
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-blue-500
                                    shadow-sm
                                    shadow-blue-500/50
                                  "
                                />

                                <span>
                                  {item}
                                </span>

                              </li>
                            )
                          )}

                        </ul>

                      </div>

                      {/* =================================================
                          TECHNOLOGIES
                      ================================================= */}

                      <div className="mt-8">

                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {experience.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="
                                  rounded-lg
                                  border
                                  border-blue-500/10
                                  bg-blue-500/[0.06]
                                  px-3
                                  py-1.5
                                  text-xs
                                  font-medium
                                  text-blue-300
                                  transition
                                  duration-200
                                  hover:border-blue-500/30
                                  hover:bg-blue-500/[0.1]
                                "
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              )
            )}

          </div>

        </div>

        {/* ==================================================
            CLOSING SECTION
        ================================================== */}

        <div
          className="
            mt-16
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

            <div>

              <p className="text-lg font-semibold text-white">
                Every role has been a learning opportunity.
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                From building interfaces to improving
                performance and collaborating with teams,
                each experience has helped me grow as a
                developer.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-gray-500">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              Continuously growing

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}