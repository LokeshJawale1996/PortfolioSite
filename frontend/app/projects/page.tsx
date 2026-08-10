import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Projects
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">
            Things I've built.
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            A collection of professional, personal and learning projects
            demonstrating my experience with modern web technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-blue-500/30"
            >

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <span className="text-5xl">
                  💻
                </span>
              </div>

              <div className="p-6">

                <h2 className="text-2xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View Project →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>

    </main>
  );
}