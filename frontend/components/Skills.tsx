import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-white/[0.015] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            A collection of technologies and tools I use to build,
            test and deliver modern web applications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-[#111827]/60 p-6 transition hover:border-blue-500/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-300 transition hover:border-blue-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}