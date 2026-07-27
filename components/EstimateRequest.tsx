"use client";

import { useState, type FormEvent } from "react";
import { Building2, CheckCircle2, LoaderCircle, ShieldCheck, Zap } from "lucide-react";

const serviceOptions = [
  "Tree Removal",
  "Tree Trimming",
  "Stump Grinding",
  "Emergency Tree Service",
  "Storm Cleanup",
  "Other",
] as const;

type ServiceOption = (typeof serviceOptions)[number];

type EstimateRequestProps = {
  defaultService?: ServiceOption;
  defaultCity?: string;
};

const cityOptions = [
  "Belleville",
  "O'Fallon",
  "Edwardsville",
  "Collinsville",
  "Fairview Heights",
  "Swansea",
  "Shiloh",
  "Columbia",
  "Waterloo",
  "Glen Carbon",
  "Granite City",
  "Maryville",
  "Troy",
  "Highland",
  "Another Metro East community",
];

const trustIndicators = [
  { icon: CheckCircle2, label: "Free Estimates" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Zap, label: "Fast Response" },
  { icon: Building2, label: "Residential & Commercial" },
];

const fieldClassName =
  "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-100";

export default function EstimateRequest({
  defaultCity,
  defaultService,
}: EstimateRequestProps) {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "ready"
  >("idle");
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setFormError("Please complete each required field before requesting your estimate.");
      form.reportValidity();
      return;
    }

    setFormError("");
    setSubmissionState("submitting");

    const formData = new FormData(form);
    const details = [
      ["Full name", formData.get("name")],
      ["Phone number", formData.get("phone")],
      ["Email address", formData.get("email")],
      ["City", formData.get("city")],
      ["Service needed", formData.get("service")],
      ["Property address", formData.get("address") || "Not provided"],
      ["Project details", formData.get("projectDetails")],
    ]
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");

    const mailtoUrl = `mailto:info@metroeasttreepros.com?subject=${encodeURIComponent(
      "Free Estimate Request",
    )}&body=${encodeURIComponent(details)}`;

    window.setTimeout(() => {
      setSubmissionState("ready");
      window.location.href = mailtoUrl;
    }, 350);
  }

  return (
    <div
      id="estimate"
      className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-slate-200/70"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-green-900 p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-300">
            Get a Free Estimate
          </p>
          <h2 id="estimate-request-heading" className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Tell us about your tree project.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-green-100">
            Share a few details and we&apos;ll help you take the next best step for your property.
          </p>

          <ul className="mt-10 space-y-5" aria-label="Why choose Metro East Tree Pros">
            {trustIndicators.map((indicator) => {
              const Icon = indicator.icon;

              return (
                <li key={indicator.label} className="flex items-center gap-4 text-lg font-bold">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-green-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {indicator.label}
                </li>
              );
            })}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          onInput={() => formError && setFormError("")}
          className="p-8 sm:p-10 lg:p-12"
          aria-busy={submissionState === "submitting"}
          aria-describedby="estimate-submission-note estimate-form-status"
          aria-labelledby="estimate-request-heading"
        >
          <div id="estimate-form-status" aria-live="polite">
            {formError ? (
              <p
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
              >
                {formError}
              </p>
            ) : null}
            {submissionState === "ready" ? (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-sm leading-6 text-green-950">
                <p className="font-bold">Your estimate email is ready to send.</p>
                <p className="mt-1">
                  Your email app should have opened with your details. Send that
                  message to notify Metro East Tree Pros, or call if you need
                  help right away.
                </p>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="estimate-name" className="text-sm font-bold text-gray-900">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input id="estimate-name" name="name" type="text" autoComplete="name" required className={fieldClassName} />
            </div>
            <div>
              <label htmlFor="estimate-phone" className="text-sm font-bold text-gray-900">
                Phone Number <span aria-hidden="true">*</span>
              </label>
              <input id="estimate-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required className={fieldClassName} />
            </div>
            <div>
              <label htmlFor="estimate-email" className="text-sm font-bold text-gray-900">
                Email Address <span aria-hidden="true">*</span>
              </label>
              <input id="estimate-email" name="email" type="email" autoComplete="email" required className={fieldClassName} />
            </div>
            <div>
              <label htmlFor="estimate-service" className="text-sm font-bold text-gray-900">
                Service needed <span aria-hidden="true">*</span>
              </label>
              <select
                id="estimate-service"
                name="service"
                defaultValue={defaultService ?? ""}
                required
                className={fieldClassName}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="estimate-city" className="text-sm font-bold text-gray-900">
              City <span aria-hidden="true">*</span>
            </label>
            <select
              id="estimate-city"
              name="city"
              defaultValue={defaultCity ?? ""}
              required
              className={fieldClassName}
            >
              <option value="" disabled>
                Select your city
              </option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="estimate-address" className="text-sm font-bold text-gray-900">
              Property Address <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="estimate-address"
              name="address"
              type="text"
              autoComplete="street-address"
              className={fieldClassName}
              placeholder="Street address where work is needed"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="estimate-message" className="text-sm font-bold text-gray-900">
              Project Details <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="estimate-message"
              name="projectDetails"
              rows={5}
              required
              className={fieldClassName}
              placeholder="For example: tree size, access concerns, storm damage, or your preferred timeline."
            />
          </div>

          <p id="estimate-submission-note" className="mt-5 text-sm leading-6 text-gray-600">
            Required fields are marked with an asterisk. Submitting prepares an
            email with your details ready to send to Metro East Tree Pros.
          </p>
          <button
            type="submit"
            disabled={submissionState === "submitting"}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-green-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 disabled:cursor-wait disabled:opacity-75"
          >
            {submissionState === "submitting" ? (
              <>
                <LoaderCircle className="mr-3 h-5 w-5 animate-spin" aria-hidden="true" />
                Preparing Your Estimate Request
              </>
            ) : (
              "Get My Free Estimate"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
