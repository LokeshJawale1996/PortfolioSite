import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">

      {/* Background decoration */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl">

        <div className="max-w-3xl">

          {/* Small introduction */}

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">

            Lokesh
            <span className="text-blue-500">.</span>

          </h1>

          {/* Role */}

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl">

            Front-End Developer

          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">

            I build responsive, scalable and user-friendly web applications
            using modern frontend technologies.

          </p>

          {/* Technologies */}

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Vue.js"
            ].map((technology) => (

              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/10 px-6 py-3 font-medium text-gray-300 transition hover:border-white/30 hover:text-white"
            >
              Let's Connect
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}