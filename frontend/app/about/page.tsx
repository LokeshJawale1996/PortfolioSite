import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">

      <div className="mx-auto max-w-5xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            About Me
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">
            A little more about me.
          </h1>
        </div>

        <div className="space-y-6">

          {profile.about.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-4xl text-lg leading-8 text-gray-400"
            >
              {paragraph}
            </p>
          ))}

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">
              Experience
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              5+ Years
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">
              Primary Focus
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              Frontend
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">
              Location
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              {profile.location}
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}