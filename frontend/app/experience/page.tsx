import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">

      <div className="mx-auto max-w-5xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Experience
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">
            My professional journey.
          </h1>
        </div>

        <div className="space-y-8">

          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
            >

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {experience.role}
                  </h2>

                  <p className="mt-1 text-blue-400">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  {experience.startDate} — {experience.endDate}
                </p>

              </div>

              <ul className="mt-6 space-y-3">

                {experience.description.map((item) => (
                  <li
                    key={item}
                    className="leading-7 text-gray-400"
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

            </article>
          ))}

        </div>

      </div>

    </main>
  );
}