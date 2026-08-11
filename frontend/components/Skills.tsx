import { skillCategories } from "@/data/skills";

const categoryIcons = [
  // Frontend / UI
  <svg
    key="frontend"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M3 8H21"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M7 6H7.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M10 6H10.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M8 12L6 14L8 16"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16 12L18 14L16 16"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // Backend
  <svg
    key="backend"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <ellipse
      cx="12"
      cy="6"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>,

  // Tools
  <svg
    key="tools"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <path
      d="M14.5 6.5L17.5 3.5L20.5 6.5L17.5 9.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M13 8L4 17C3.4 17.6 3.4 18.6 4 19.2L4.8 20C5.4 20.6 6.4 20.6 7 20L16 11"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M14 14L19 19"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>,

  // Testing / Quality
  <svg
    key="testing"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <path
      d="M7 3H17V21H7V3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    <path
      d="M10 7H14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />

    <path
      d="M9.5 12L11.5 14L15 10.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-white/[0.012]
        px-6
        py-24
        sm:py-32
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
          bg-blue-600/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          -z-10
          h-96
          w-96
          rounded-full
          bg-violet-600/[0.05]
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
            HEADER
        ================================================== */}

        <div className="mb-14 max-w-3xl">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Technical Skills
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
            Tools I use to build

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
              digital experiences.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-gray-500
            "
          >
            A collection of technologies and tools I use to
            design, build, test and deliver modern,
            scalable web applications.
          </p>

        </div>

        {/* ==================================================
            SKILL CATEGORIES
        ================================================== */}

        <div className="grid gap-5 md:grid-cols-2">

          {skillCategories.map(
            (category, index) => (
              <div
                key={category.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  sm:p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  hover:bg-white/[0.035]
                "
              >

                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
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
                      CARD HEADER
                  ================================================= */}

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-blue-500/15
                          bg-blue-500/[0.08]
                          text-blue-400
                          transition
                          duration-300
                          group-hover:border-blue-500/30
                          group-hover:bg-blue-500/[0.12]
                          group-hover:text-blue-300
                        "
                      >
                        {categoryIcons[
                          index %
                          categoryIcons.length
                        ]}
                      </div>

                      <div>

                        <h3
                          className="
                            text-lg
                            font-semibold
                            text-white
                            sm:text-xl
                          "
                        >
                          {category.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {category.skills.length}{" "}
                          technologies
                        </p>

                      </div>

                    </div>

                    {/* Number */}

                    <span
                      className="
                        text-xs
                        font-medium
                        tracking-wider
                        text-gray-700
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                  </div>

                  {/* =================================================
                      DIVIDER
                  ================================================= */}

                  <div className="my-6 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                  {/* =================================================
                      SKILLS
                  ================================================= */}

                  <div className="flex flex-wrap gap-2.5">

                    {category.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="
                            group/skill
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/[0.07]
                            bg-black/20
                            px-3.5
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

                          {/* Small dot */}

                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-gray-700
                              transition
                              duration-200
                              group-hover/skill:bg-blue-400
                            "
                          />

                          {skill}

                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>
            )
          )}

        </div>

        {/* ==================================================
            BOTTOM SUMMARY
        ================================================== */}

        <div
          className="
            mt-6
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/10
            bg-gradient-to-r
            from-blue-500/[0.04]
            via-transparent
            to-violet-500/[0.04]
            p-6
            sm:p-7
          "
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Left */}

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
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
                    d="M12 3L14.7 9.3L21 12L14.7 14.7L12 21L9.3 14.7L3 12L9.3 9.3L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Always learning. Always improving.
                </p>

                <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                  I continuously explore new technologies,
                  patterns and best practices to build
                  better digital products.
                </p>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                text-xs
                font-medium
                text-gray-500
              "
            >

              <span className="h-2 w-2 rounded-full bg-green-400" />

              Open to learning

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}