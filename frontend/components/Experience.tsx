import Link from "next/link";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My professional journey.
          </h2>
        </div>

        <div className="relative ml-3 border-l border-white/10">

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative pb-12 pl-8 last:pb-0"
            >

              {/* Timeline dot */}

              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-[#0b1120]" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-500/30">

                <div className="flex flex-col justify-between gap-2 md:flex-row">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-blue-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    {experience.startDate} — {experience.endDate}
                  </span>

                </div>

                <ul className="mt-6 space-y-3">

                  {experience.description.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-6 text-gray-400"
                    >
                      <span className="mr-2 text-blue-500">
                        •
                      </span>

                      {item}
                    </li>
                  ))}

                </ul>

                <div className="mt-6 flex flex-wrap gap-2">

                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* <Link
          href="/experience"
          className="mt-8 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          View full experience →
        </Link> */}

      </div>
    </section>
  );
}