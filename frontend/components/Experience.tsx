import Link from "next/link";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
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
            HEADER
        ================================================== */}

        <div className="mb-16 max-w-3xl">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Experience
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
            A look at my professional journey, the products
            I&apos;ve worked on, and the technologies I&apos;ve
            used along the way.
          </p>

        </div>

        {/* ==================================================
            TIMELINE
        ================================================== */}

        <div className="relative">

          {/* Main Timeline Line */}

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
              md:left-[23px]
            "
          />

          <div className="space-y-10">

            {experiences.map(
              (experience, index) => (
                <div
                  key={experience.id}
                  className="group relative pl-12 md:pl-16"
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
                      md:h-12
                      md:w-12
                    "
                  >

                    {/* Inner dot */}

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
                      EXPERIENCE CARD
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
                      sm:p-7
                      md:p-8
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
                        bg-blue-500/[0.06]
                        blur-3xl
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">

                      {/* =================================================
                          TOP ROW
                      ================================================= */}

                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                        {/* Role + Company */}

                        <div className="flex gap-4">

                          {/* Experience Number */}

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
                            {String(
                              index + 1
                            ).padStart(2, "0")}
                          </div>

                          <div>

                            {/* Role */}

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

                            {/* Company */}

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

                        {/* =================================================
                            DATE
                        ================================================= */}

                        <div
                          className="
                            inline-flex
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

                          {/* Calendar */}

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

                      <div
                        className="
                          my-6
                          h-px
                          bg-gradient-to-r
                          from-white/[0.08]
                          via-white/[0.04]
                          to-transparent
                        "
                      />

                      {/* =================================================
                          DESCRIPTION
                      ================================================= */}

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

                              {/* Bullet */}

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

                      {/* =================================================
                          TECHNOLOGIES
                      ================================================= */}

                      <div className="mt-7">

                        <p
                          className="
                            mb-3
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-gray-600
                          "
                        >
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

                </div>
              )
            )}

          </div>

        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <div className="mt-12 flex justify-center">

          <Link
            href="/experience"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              py-3
              text-sm
              font-medium
              text-gray-400
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-500/30
              hover:bg-blue-500/[0.05]
              hover:text-blue-300
            "
          >
            View Full Experience

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
    </section>
  );
}