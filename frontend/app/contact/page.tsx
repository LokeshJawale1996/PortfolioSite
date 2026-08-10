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
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: "🇮🇳",
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
  },
  {
    code: "CA",
    name: "Canada",
    dialCode: "+1",
    flag: "🇨🇦",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "🇬🇧",
  },
  {
    code: "AU",
    name: "Australia",
    dialCode: "+61",
    flag: "🇦🇺",
  },
  {
    code: "DE",
    name: "Germany",
    dialCode: "+49",
    flag: "🇩🇪",
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    flag: "🇫🇷",
  },
  {
    code: "IT",
    name: "Italy",
    dialCode: "+39",
    flag: "🇮🇹",
  },
  {
    code: "ES",
    name: "Spain",
    dialCode: "+34",
    flag: "🇪🇸",
  },
  {
    code: "NL",
    name: "Netherlands",
    dialCode: "+31",
    flag: "🇳🇱",
  },
  {
    code: "CH",
    name: "Switzerland",
    dialCode: "+41",
    flag: "🇨🇭",
  },
  {
    code: "SG",
    name: "Singapore",
    dialCode: "+65",
    flag: "🇸🇬",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    dialCode: "+971",
    flag: "🇦🇪",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    dialCode: "+966",
    flag: "🇸🇦",
  },
  {
    code: "QA",
    name: "Qatar",
    dialCode: "+974",
    flag: "🇶🇦",
  },
  {
    code: "NZ",
    name: "New Zealand",
    dialCode: "+64",
    flag: "🇳🇿",
  },
  {
    code: "JP",
    name: "Japan",
    dialCode: "+81",
    flag: "🇯🇵",
  },
  {
    code: "CN",
    name: "China",
    dialCode: "+86",
    flag: "🇨🇳",
  },
  {
    code: "BR",
    name: "Brazil",
    dialCode: "+55",
    flag: "🇧🇷",
  },
  {
    code: "ZA",
    name: "South Africa",
    dialCode: "+27",
    flag: "🇿🇦",
  },
  {
    code: "RU",
    name: "Russia",
    dialCode: "+7",
    flag: "🇷🇺",
  },
  {
    code: "MY",
    name: "Malaysia",
    dialCode: "+60",
    flag: "🇲🇾",
  },
  {
    code: "TH",
    name: "Thailand",
    dialCode: "+66",
    flag: "🇹🇭",
  },
  {
    code: "ID",
    name: "Indonesia",
    dialCode: "+62",
    flag: "🇮🇩",
  },
  {
    code: "IE",
    name: "Ireland",
    dialCode: "+353",
    flag: "🇮🇪",
  },
];

/* ============================================================
   VALIDATION
============================================================ */

/**
 * Validate email address.
 */
const validateEmail = (email: string): boolean => {
  const value = email.trim();

  if (!value) {
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(value)) {
    return false;
  }

  if (value.includes("..")) {
    return false;
  }

  if (/\s/.test(value)) {
    return false;
  }

  return true;
};

/**
 * Validate Indian mobile number.
 *
 * Exactly 10 digits.
 * First digit must be 6, 7, 8 or 9.
 */
const validateIndianMobile = (
  mobile: string
): boolean => {
  return /^[6-9][0-9]{9}$/.test(mobile);
};

/**
 * Generic international mobile validation.
 *
 * Used for countries other than India.
 */
const validateInternationalMobile = (
  mobile: string
): boolean => {
  return /^[0-9]{6,15}$/.test(mobile);
};

/* ============================================================
   COMPONENT
============================================================ */

export default function ContactPage() {
  /* ==========================================================
     FORM STATE
  ========================================================== */

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  /* ==========================================================
     COUNTRY STATE
  ========================================================== */

  const [selectedCountry, setSelectedCountry] =
    useState("IN");

  const selectedCountryData =
    countries.find(
      (country) =>
        country.code === selectedCountry
    ) || countries[0];

  /* ==========================================================
     UI STATE
  ========================================================== */

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [fieldErrors, setFieldErrors] =
    useState<{
      email?: string;
      mobileNumber?: string;
    }>({});

  /* ==========================================================
     EMAIL CHANGE
  ========================================================== */

  const handleEmailChange = (
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      email: value,
    }));

    setSubmitted(false);
    setError("");

    if (
      value.trim() &&
      !validateEmail(value)
    ) {
      setFieldErrors((previous) => ({
        ...previous,
        email:
          "Please enter a valid email address.",
      }));
    } else {
      setFieldErrors((previous) => ({
        ...previous,
        email: undefined,
      }));
    }
  };

  /* ==========================================================
     COUNTRY CHANGE
  ========================================================== */

  const handleCountryChange = (
    countryCode: string
  ) => {
    setSelectedCountry(countryCode);

    /*
     * Clear mobile when changing country
     * because validation rules may change.
     */
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
     MOBILE CHANGE
  ========================================================== */

  const handleMobileChange = (
    value: string
  ) => {
    /*
     * Only allow digits.
     */
    const onlyDigits = value.replace(
      /\D/g,
      ""
    );

    /*
     * India = exactly 10 digits.
     * Other countries = maximum 15 digits.
     */
    const maxLength =
      selectedCountry === "IN"
        ? 10
        : 15;

    const limitedValue =
      onlyDigits.slice(0, maxLength);

    setForm((previous) => ({
      ...previous,
      mobileNumber: limitedValue,
    }));

    setSubmitted(false);
    setError("");

    /*
     * Mobile is optional.
     */
    if (!limitedValue) {
      setFieldErrors((previous) => ({
        ...previous,
        mobileNumber: undefined,
      }));

      return;
    }

    /* India */

    if (selectedCountry === "IN") {
      if (
        !validateIndianMobile(
          limitedValue
        )
      ) {
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

    /* Other countries */

    if (
      !validateInternationalMobile(
        limitedValue
      )
    ) {
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
     SUBMIT FORM
  ========================================================== */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");

    /* ========================================================
       EMAIL VALIDATION
    ======================================================== */

    if (!validateEmail(form.email)) {
      setFieldErrors((previous) => ({
        ...previous,
        email:
          "Please enter a valid email address.",
      }));

      return;
    }

    /* ========================================================
       MOBILE VALIDATION
    ======================================================== */

    /*
     * Mobile is optional.
     *
     * Only validate if the user entered a number.
     */

    if (form.mobileNumber) {
      if (selectedCountry === "IN") {
        if (
          !validateIndianMobile(
            form.mobileNumber
          )
        ) {
          setFieldErrors((previous) => ({
            ...previous,
            mobileNumber:
              "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.",
          }));

          return;
        }
      } else {
        if (
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
    }

    /* ========================================================
       START API REQUEST
    ======================================================== */

    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8080";

      /*
       * mobileNumber is optional.
       *
       * Therefore we first create the request
       * without mobileNumber.
       */
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

      /*
       * Only add mobileNumber when the user
       * actually entered one.
       *
       * Example:
       *
       * Country = India
       * Number  = 9876543210
       *
       * Result:
       * +919876543210
       */
      if (form.mobileNumber) {
        requestBody.mobileNumber =
          `${selectedCountryData.dialCode}${form.mobileNumber}`;
      }

      /* ======================================================
         API CALL
      ====================================================== */

      const response = await fetch(
        `${apiUrl}/api/v1/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(
            requestBody
          ),
        }
      );

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      /* ======================================================
         API ERROR
      ====================================================== */

      if (!response.ok) {
        throw new Error(
          data?.message ||
          "Unable to submit your message. Please try again."
        );
      }

      /* ======================================================
         SUCCESS
      ====================================================== */

      /*
       * This changes the UI from:
       *
       * CONTACT FORM
       *
       * to:
       *
       * SUCCESS MESSAGE
       */
      setSubmitted(true);

      setError("");

      setFieldErrors({});

      /*
       * Clear the form so when the user clicks
       * "Send Another Message", they get a fresh form.
       */
      setForm({
        name: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
      });

      /*
       * Reset country to India.
       */
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
    <main className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">

        {/* ====================================================
            HEADER
        ==================================================== */}

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

        {/* ====================================================
            SUCCESS / FORM
        ==================================================== */}

        {submitted ? (

          /* ==================================================
             SUCCESS MESSAGE
          ================================================== */

          <div className="rounded-2xl border border-green-500/20 bg-green-500/[0.05] p-8 text-center md:p-12">

            {/* Success Icon */}

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">

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

            </div>

            {/* Success Heading */}

            <h2 className="mt-6 text-2xl font-semibold text-green-300">
              Message submitted successfully!
            </h2>

            {/* Success Description */}

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-400">
              Thank you for reaching out.
              I&apos;ll get in touch with you soon.
            </p>

            {/* Send Another Message */}

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setError("");
                setFieldErrors({});
              }}
              className="mt-7 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3 font-medium text-white transition hover:border-blue-500/40 hover:bg-white/[0.08]"
            >
              Send Another Message
            </button>

          </div>

        ) : (

          /* ==================================================
             CONTACT FORM
          ================================================== */

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
          >

            {/* =================================================
                NAME + EMAIL
            ================================================= */}

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
                  onChange={(event) => {
                    setForm((previous) => ({
                      ...previous,
                      name: event.target.value,
                    }));

                    setError("");
                  }}
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
                    handleEmailChange(
                      event.target.value
                    )
                  }
                  onBlur={() => {
                    if (
                      form.email &&
                      !validateEmail(
                        form.email
                      )
                    ) {
                      setFieldErrors(
                        (previous) => ({
                          ...previous,
                          email:
                            "Please enter a valid email address.",
                        })
                      );
                    }
                  }}
                  className={`w-full rounded-lg border bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500 ${fieldErrors.email
                    ? "border-red-500/60"
                    : "border-white/10"
                    }`}
                />

                {fieldErrors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {fieldErrors.email}
                  </p>
                )}

              </div>

            </div>

            {/* =================================================
                MOBILE + SUBJECT
            ================================================= */}

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

                <div className="flex">

                  {/* Country Code */}

                  <div className="relative shrink-0">

                    <select
                      value={selectedCountry}
                      onChange={(event) =>
                        handleCountryChange(
                          event.target.value
                        )
                      }
                      aria-label="Country code"
                      className="h-full min-w-[135px] appearance-none rounded-l-lg border border-r-0 border-white/10 bg-black/40 px-3 pr-8 text-sm text-white outline-none transition focus:border-blue-500"
                    >

                      {countries.map(
                        (country) => (
                          <option
                            key={
                              country.code
                            }
                            value={
                              country.code
                            }
                            className="bg-gray-900 text-white"
                          >
                            {country.flag}{" "}
                            {country.dialCode}
                          </option>
                        )
                      )}

                    </select>

                    {/* Dropdown Arrow */}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
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

                  {/* Mobile Number */}

                  <input
                    id="mobileNumber"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder={
                      selectedCountry === "IN"
                        ? "9876543210"
                        : "Mobile Number"
                    }
                    value={
                      form.mobileNumber
                    }
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
                    className={`min-w-0 flex-1 rounded-r-lg border bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500 ${fieldErrors.mobileNumber
                      ? "border-red-500/60"
                      : "border-white/10"
                      }`}
                  />

                </div>

                {/* Mobile Validation */}

                {fieldErrors.mobileNumber ? (

                  <p className="mt-2 text-sm text-red-400">
                    {fieldErrors.mobileNumber}
                  </p>

                ) : selectedCountry ===
                  "IN" ? (

                  <p className="mt-2 text-xs text-gray-500">
                    Enter 10 digits starting with
                    6, 7, 8 or 9.
                  </p>

                ) : (

                  <p className="mt-2 text-xs text-gray-500">
                    Enter 6 to 15 digits.
                  </p>

                )}

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
                  onChange={(event) => {
                    setForm((previous) => ({
                      ...previous,
                      subject:
                        event.target.value,
                    }));

                    setError("");
                  }}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
                />

              </div>

            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

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
                onChange={(event) => {
                  setForm((previous) => ({
                    ...previous,
                    message:
                      event.target.value,
                  }));

                  setError("");
                }}
                className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
              />

            </div>

            {/* =================================================
                API ERROR
            ================================================= */}

            {error && (

              <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">

                {/* Error Icon */}

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

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

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

        )}

        {/* ====================================================
            RESUME
        ==================================================== */}

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

        {/* ====================================================
            SOCIAL LINKS
        ==================================================== */}

        <div className="mt-16 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Connect With Me
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Find me online
          </h2>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            {socialLinks.map(
              (social) => (

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

              )
            )}

          </div>

        </div>

      </div>
    </main>
  );
}