"use client";

import { FormEvent, useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    username: "@_lokesh_jawale",
    url: "https://www.instagram.com/_lokesh_jawale/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    username: "Lokesh Jawale",
    url: "https://www.linkedin.com/in/lokesh-jawale-fed/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 20.45H7.1V8.98H3.54v11.47z" />
      </svg>
    ),
  },

  {
    name: "Email",
    username: "lokeshjawale@gmail.com",
    url: "mailto:lokeshjawale@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M3.5 7L12 13L20.5 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");
    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8080";

      const response = await fetch(
        `${apiUrl}/api/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
          "Unable to submit your message. Please try again."
        );
      }

      // Success
      setSubmitted(true);

      // Clear form after successful submission
      setForm({
        name: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-12 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">
            Let&apos;s work together.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a project, opportunity or just want to say hello?
            Feel free to send me a message.
          </p>

        </div>

        {/* =====================================================
            CONTACT FORM
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
        >

          {/* Name + Email */}

          <div className="grid gap-5 md:grid-cols-2">

            {/* Name */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                required
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
              />
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
              />
            </div>

          </div>

          {/* Mobile + Subject */}

          <div className="grid gap-5 md:grid-cols-2">

            {/* Mobile */}

            <div>
              <label
                htmlFor="mobileNumber"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Mobile Number
                <span className="ml-1 text-xs text-gray-500">
                  (Optional)
                </span>
              </label>

              <input
                id="mobileNumber"
                type="tel"
                placeholder="Your Mobile Number"
                value={form.mobileNumber}
                onChange={(event) =>
                  setForm({
                    ...form,
                    mobileNumber: event.target.value,
                  })
                }
                pattern="[0-9+\-\s()]{10,15}"
                title="Please enter a valid mobile number"
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
              />
            </div>

            {/* Subject */}

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                required
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(event) =>
                  setForm({
                    ...form,
                    subject: event.target.value,
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
              />
            </div>

          </div>

          {/* Message */}

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              required
              rows={7}
              placeholder="Your Message"
              value={form.message}
              onChange={(event) =>
                setForm({
                  ...form,
                  message: event.target.value,
                })
              }
              className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
            />
          </div>

          {/* =====================================================
              SUCCESS MESSAGE
          ===================================================== */}

          {submitted && (
            <div className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">

              {/* Check Icon */}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 h-5 w-5 shrink-0"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M8 12L10.8 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <p className="font-medium text-green-300">
                  Message submitted successfully!
                </p>

                <p className="mt-1 text-green-400/80">
                  Thank you for reaching out. I&apos;ll get in touch
                  with you soon.
                </p>
              </div>

            </div>
          )}

          {/* =====================================================
              ERROR MESSAGE
          ===================================================== */}

          {error && (
            <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 h-5 w-5 shrink-0"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M12 8V13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <circle
                  cx="12"
                  cy="16.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>

              <div>
                <p className="font-medium text-red-300">
                  Unable to send your message
                </p>

                <p className="mt-1 text-red-400/80">
                  {error}
                </p>
              </div>

            </div>
          )}

          {/* =====================================================
              SUBMIT BUTTON
          ===================================================== */}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/10 transition hover:from-blue-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading ? (
              <>
                {/* Loading Spinner */}

                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                  />

                  <path
                    d="M21 12a9 9 0 0 0-9-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                Sending...

              </>
            ) : (
              "Send Message"
            )}

          </button>

        </form>

        {/* =====================================================
            RESUME
        ===================================================== */}

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Resume
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Want to know more about my experience?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Download my latest resume to learn more about my professional
            experience, technical skills and projects.
          </p>

          <a
            href="/resume.pdf"
            download="Lokesh-Jawale-Resume.pdf"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/10 transition hover:from-blue-500 hover:to-violet-500"
          >

            {/* Download Icon */}

            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M12 3V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M7 11L12 16L17 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M5 21H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            Download Resume

          </a>

        </div>

        {/* =====================================================
            SOCIAL LINKS
        ===================================================== */}

        <div className="mt-16 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Connect With Me
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Find me online
          </h2>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name}`}
                className="group flex min-w-[190px] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]"
              >

                {/* Icon */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                  {social.icon}
                </div>

                {/* Text */}

                <div>
                  <p className="font-medium text-white">
                    {social.name}
                  </p>

                  <p className="mt-1 max-w-[150px] truncate text-sm text-gray-500">
                    {social.username}
                  </p>
                </div>

              </a>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}