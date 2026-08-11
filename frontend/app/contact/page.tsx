"use client";

import { FormEvent, useState } from "react";

/* ============================================================
   SOCIAL LINKS
============================================================ */

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

/* ============================================================
   COUNTRY LIST
============================================================ */

const countries = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
];

/* ============================================================
   VALIDATION
============================================================ */

const validateEmail = (email: string): boolean => {
  const value = email.trim();

  if (!value || value.includes("..") || /\s/.test(value)) {
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  return emailRegex.test(value);
};

const validateIndianMobile = (mobile: string): boolean => {
  return /^[6-9][0-9]{9}$/.test(mobile);
};

const validateInternationalMobile = (mobile: string): boolean => {
  return /^[0-9]{6,15}$/.test(mobile);
};

/* ============================================================
   SMALL ICONS
============================================================ */

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M21 3L10.5 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M21 3L14.3 21L10.5 13.5L3 9.7L21 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
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
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
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
  );
}

/* ============================================================
   COMPONENT
============================================================ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("IN");

  const selectedCountryData =
    countries.find(
      (country) => country.code === selectedCountry
    ) || countries[0];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    mobileNumber?: string;
  }>({});

  /* ==========================================================
     EMAIL
  ========================================================== */

  const handleEmailChange = (value: string) => {
    setForm((previous) => ({
      ...previous,
      email: value,
    }));

    setSubmitted(false);
    setError("");

    if (value.trim() && !validateEmail(value)) {
      setFieldErrors((previous) => ({
        ...previous,
        email: "Please enter a valid email address.",
      }));
    } else {
      setFieldErrors((previous) => ({
        ...previous,
        email: undefined,
      }));
    }
  };

  /* ==========================================================
     COUNTRY
  ========================================================== */

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);

    setForm((previous) => ({
      ...previous,
      mobileNumber: "",
    }));

    setFieldErrors((previous) => ({
      ...previous,
      mobileNumber: undefined,
    }));

    setSubmitted(false);
    setError("");
  };

  /* ==========================================================
     MOBILE
  ========================================================== */

  const handleMobileChange = (value: string) => {
    const onlyDigits = value.replace(/\D/g, "");

    const maxLength =
      selectedCountry === "IN" ? 10 : 15;

    const limitedValue = onlyDigits.slice(
      0,
      maxLength
    );

    setForm((previous) => ({
      ...previous,
      mobileNumber: limitedValue,
    }));

    setSubmitted(false);
    setError("");

    if (!limitedValue) {
      setFieldErrors((previous) => ({
        ...previous,
        mobileNumber: undefined,
      }));

      return;
    }

    if (selectedCountry === "IN") {
      if (!validateIndianMobile(limitedValue)) {
        setFieldErrors((previous) => ({
          ...previous,
          mobileNumber:
            "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.",
        }));
      } else {
        setFieldErrors((previous) => ({
          ...previous,
          mobileNumber: undefined,
        }));
      }

      return;
    }

    if (!validateInternationalMobile(limitedValue)) {
      setFieldErrors((previous) => ({
        ...previous,
        mobileNumber:
          "Please enter a valid mobile number.",
      }));
    } else {
      setFieldErrors((previous) => ({
        ...previous,
        mobileNumber: undefined,
      }));
    }
  };

  /* ==========================================================
     SUBMIT
  ========================================================== */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");

    if (!validateEmail(form.email)) {
      setFieldErrors((previous) => ({
        ...previous,
        email: "Please enter a valid email address.",
      }));

      return;
    }

    if (form.mobileNumber) {
      if (selectedCountry === "IN") {
        if (!validateIndianMobile(form.mobileNumber)) {
          setFieldErrors((previous) => ({
            ...previous,
            mobileNumber:
              "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.",
          }));

          return;
        }
      } else if (
        !validateInternationalMobile(
          form.mobileNumber
        )
      ) {
        setFieldErrors((previous) => ({
          ...previous,
          mobileNumber:
            "Please enter a valid mobile number.",
        }));

        return;
      }
    }

    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8080";

      const requestBody: {
        name: string;
        email: string;
        subject: string;
        message: string;
        mobileNumber?: string;
      } = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      if (form.mobileNumber) {
        requestBody.mobileNumber =
          `${selectedCountryData.dialCode}${form.mobileNumber}`;
      }

      const response = await fetch(
        `${apiUrl}/api/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data?.message ||
          "Unable to submit your message. Please try again."
        );
      }

      setSubmitted(true);
      setError("");
      setFieldErrors({});

      setForm({
        name: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
      });

      setSelectedCountry("IN");
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pb-24
        pt-32
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

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
          bg-blue-600/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[35%]
          -z-10
          h-96
          w-96
          rounded-full
          bg-violet-600/[0.07]
          blur-[120px]
        "
      />

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

        {/* ====================================================
            HERO
        ==================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <span className="h-px w-8 bg-blue-500" />

          </div>

          <h1
            className="
              text-5xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Let&apos;s build something

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
              great together.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-500
              sm:text-lg
            "
          >
            Have a project, opportunity, idea or simply
            want to say hello? Drop me a message and
            I&apos;ll get back to you.
          </p>

        </div>

        {/* ====================================================
            CONTACT LAYOUT
        ==================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-start
          "
        >

          {/* ==================================================
              LEFT INFO
          ================================================== */}

          <div className="space-y-5">

            {/* Intro Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
              "
            >

              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-3xl
                "
              />

              <div className="relative">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.07]
                    text-blue-400
                  "
                >
                  <SendIcon />
                </div>

                <h2 className="mt-6 text-xl font-semibold text-white">
                  Get in touch
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  I&apos;m always open to discussing new
                  projects, creative ideas or opportunities
                  to be part of something interesting.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">

                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/40" />

                  Usually responds within 24–48 hours

                </div>

              </div>

            </div>

            {/* Quick Contact */}

            <div
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
              "
            >

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Connect
              </p>

              <div className="mt-5 space-y-3">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.name === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      p-4
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-blue-500/20
                      hover:bg-blue-500/[0.04]
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-500/[0.07]
                        text-blue-400
                        transition
                        group-hover:bg-blue-500/[0.12]
                      "
                    >
                      {social.icon}
                    </div>

                    <div className="min-w-0">

                      <p className="text-sm font-medium text-white">
                        {social.name}
                      </p>

                      <p className="mt-1 truncate text-xs text-gray-600">
                        {social.username}
                      </p>

                    </div>

                    <div className="ml-auto text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                      <ArrowIcon />
                    </div>

                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* ==================================================
              FORM
          ================================================== */}

          <div>

            {submitted ? (

              /* =================================================
                 SUCCESS
              ================================================= */

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-green-500/20
                  bg-green-500/[0.035]
                  p-8
                  text-center
                  sm:p-12
                "
              >

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-48
                    w-48
                    -translate-x-1/2
                    rounded-full
                    bg-green-500/[0.08]
                    blur-3xl
                  "
                />

                <div className="relative">

                  <div
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-500/20
                      bg-green-500/10
                      text-green-400
                    "
                  >
                    <CheckIcon />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                    Message Sent
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Thanks for reaching out!
                  </h2>

                  <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500">
                    Your message has been submitted successfully.
                    I&apos;ll get in touch with you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                      setFieldErrors({});
                    }}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-6
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:border-blue-500/30
                      hover:bg-blue-500/[0.06]
                    "
                  >
                    Send another message
                    <ArrowIcon />
                  </button>

                </div>

              </div>

            ) : (

              /* =================================================
                 FORM CARD
              ================================================= */

              <form
                onSubmit={handleSubmit}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  sm:p-8
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-blue-500/[0.06]
                    blur-3xl
                  "
                />

                <div className="relative">

                  {/* Form Header */}

                  <div className="mb-8">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Send a message
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Tell me about your idea.
                    </h2>

                  </div>

                  {/* =================================================
                      NAME + EMAIL
                  ================================================= */}

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-gray-400"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Lokesh"
                        value={form.name}
                        onChange={(event) => {
                          setForm((previous) => ({
                            ...previous,
                            name: event.target.value,
                          }));

                          setError("");
                        }}
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black/20
                          px-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-gray-700
                          transition
                          focus:border-blue-500/50
                          focus:bg-black/30
                        "
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-gray-400"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(event) =>
                          handleEmailChange(
                            event.target.value
                          )
                        }
                        className={`
                          h-12
                          w-full
                          rounded-xl
                          border
                          bg-black/20
                          px-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-gray-700
                          transition
                          focus:border-blue-500/50
                          ${fieldErrors.email
                            ? "border-red-500/50"
                            : "border-white/[0.08]"
                          }
                        `}
                      />

                      {fieldErrors.email && (
                        <p className="mt-2 text-xs text-red-400">
                          {fieldErrors.email}
                        </p>
                      )}

                    </div>

                  </div>

                  {/* =================================================
                      MOBILE + SUBJECT
                  ================================================= */}

                  <div className="mt-5 grid gap-5 md:grid-cols-2">

                    {/* Mobile */}

                    <div className="min-w-0">

                      <label
                        htmlFor="mobileNumber"
                        className="mb-2 block text-xs font-medium text-gray-400"
                      >
                        Mobile Number
                        <span className="ml-1 text-gray-600">
                          (Optional)
                        </span>
                      </label>

                      <div className="flex min-w-0">

                        <div className="relative shrink-0">

                          <select
                            value={selectedCountry}
                            onChange={(event) =>
                              handleCountryChange(
                                event.target.value
                              )
                            }
                            aria-label="Country code"
                            className="
                              h-12
                              w-[96px]
                              appearance-none
                              rounded-l-xl
                              border
                              border-r-0
                              border-white/[0.08]
                              bg-black/30
                              px-2
                              pr-6
                              text-sm
                              text-white
                              outline-none
                              transition
                              focus:border-blue-500/50
                              sm:w-[110px]
                              sm:px-3
                            "
                          >
                            {countries.map(
                              (country) => (
                                <option
                                  key={country.code}
                                  value={country.code}
                                  className="bg-gray-900 text-white"
                                >
                                  {country.flag}{" "}
                                  {country.dialCode}
                                </option>
                              )
                            )}
                          </select>

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="
                              pointer-events-none
                              absolute
                              right-2
                              top-1/2
                              h-4
                              w-4
                              -translate-y-1/2
                              text-gray-600
                            "
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                        </div>

                        <input
                          id="mobileNumber"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          placeholder={
                            selectedCountry === "IN"
                              ? "9876543210"
                              : "Mobile number"
                          }
                          value={form.mobileNumber}
                          onChange={(event) =>
                            handleMobileChange(
                              event.target.value
                            )
                          }
                          maxLength={
                            selectedCountry === "IN"
                              ? 10
                              : 15
                          }
                          className={`
                            h-12
                            min-w-0
                            w-full
                            rounded-r-xl
                            border
                            bg-black/20
                            px-3
                            text-sm
                            text-white
                            outline-none
                            placeholder:text-gray-700
                            transition
                            focus:border-blue-500/50
                            sm:px-4
                            ${fieldErrors.mobileNumber
                              ? "border-red-500/50"
                              : "border-white/[0.08]"
                            }
                          `}
                        />

                      </div>

                      {fieldErrors.mobileNumber ? (
                        <p className="mt-2 text-xs leading-5 text-red-400">
                          {fieldErrors.mobileNumber}
                        </p>
                      ) : (
                        <p className="mt-2 text-[11px] text-gray-700">
                          {selectedCountry === "IN"
                            ? "10 digits starting with 6, 7, 8 or 9"
                            : "6 to 15 digits"}
                        </p>
                      )}

                    </div>

                    {/* Subject */}

                    <div className="min-w-0">

                      <label
                        htmlFor="subject"
                        className="mb-2 block text-xs font-medium text-gray-400"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        required
                        type="text"
                        placeholder="Project discussion"
                        value={form.subject}
                        onChange={(event) => {
                          setForm((previous) => ({
                            ...previous,
                            subject:
                              event.target.value,
                          }));

                          setError("");
                        }}
                        className="
                          h-12
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black/20
                          px-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-gray-700
                          transition
                          focus:border-blue-500/50
                        "
                      />

                    </div>

                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-gray-400"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={7}
                      placeholder="Tell me a little about your project, opportunity or idea..."
                      value={form.message}
                      onChange={(event) => {
                        setForm((previous) => ({
                          ...previous,
                          message:
                            event.target.value,
                        }));

                        setError("");
                      }}
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-black/20
                        px-4
                        py-3
                        text-sm
                        leading-7
                        text-white
                        outline-none
                        placeholder:text-gray-700
                        transition
                        focus:border-blue-500/50
                      "
                    />

                  </div>

                  {/* =================================================
                      ERROR
                  ================================================= */}

                  {error && (
                    <div
                      className="
                        mt-5
                        rounded-xl
                        border
                        border-red-500/20
                        bg-red-500/[0.06]
                        px-4
                        py-3
                        text-sm
                        text-red-400
                      "
                    >
                      {error}
                    </div>
                  )}

                  {/* =================================================
                      SUBMIT
                  ================================================= */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      mt-6
                      flex
                      h-12
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-violet-600
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-500/10
                      transition
                      duration-300
                      hover:from-blue-500
                      hover:to-violet-500
                      hover:shadow-blue-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >

                    {loading ? (
                      <>
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

                        Sending message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon />
                      </>
                    )}

                  </button>

                  <p className="mt-3 text-center text-[11px] text-gray-700">
                    Your information is only used to respond
                    to your message.
                  </p>

                </div>

              </form>

            )}

          </div>

        </div>

        {/* ====================================================
            RESUME
        ==================================================== */}

        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-8
            text-center
            sm:p-10
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-32
              w-64
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.05]
              blur-3xl
            "
          />

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Resume
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              Want to know more about my experience?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Download my latest resume to learn more
              about my professional experience, technical
              skills and projects.
            </p>

            <a
              href="/resume.pdf"
              download="Lokesh-Jawale-Resume.pdf"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/10
                transition
                hover:from-blue-500
                hover:to-violet-500
              "
            >

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

        </div>

        {/* ====================================================
            SOCIAL FOOTER
        ==================================================== */}

        <div className="mt-16 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Connect With Me
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Find me online
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={
                  social.name === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-4
                  text-left
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  hover:bg-white/[0.04]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/[0.07]
                    text-blue-400
                    transition
                    group-hover:bg-blue-500/[0.12]
                    group-hover:text-blue-300
                  "
                >
                  {social.icon}
                </div>

                <div className="min-w-0">

                  <p className="text-sm font-medium text-white">
                    {social.name}
                  </p>

                  <p className="mt-1 truncate text-xs text-gray-600">
                    {social.username}
                  </p>

                </div>

                <div className="ml-auto text-gray-700 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  <ArrowIcon />
                </div>

              </a>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}