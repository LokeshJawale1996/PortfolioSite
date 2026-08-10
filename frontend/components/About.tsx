import Link from "next/link";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Turning ideas into
              <span className="text-blue-500"> web experiences.</span>
            </h2>

            <div className="mt-6 space-y-4">

              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-gray-400"
                >
                  {paragraph}
                </p>
              ))}

            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-blue-500/50 hover:text-white"
            >
              More About Me →
            </Link>
          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                5+
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                10+
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                React
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Primary Frontend
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                Full Stack
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Development Knowledge
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}