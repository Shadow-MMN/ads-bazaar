"use client";

import { InputHTMLAttributes, useState } from "react";
import { Mail, Link as LinkIcon, ArrowRight } from "lucide-react";

type BusinessFormData = {
  name: string;
  industry: string;
  country: string;
  email: string;
  website: string;
  description: string;
};

type BusinessFormProps = {
  data: BusinessFormData;
  onChange: (data: BusinessFormData) => void;
  onSubmit: () => void;
  onBack: () => void;
};

const INDUSTRIES = [
  "Technology",
  "Fashion & Beauty",
  "Food & Beverage",
  "Gaming",
  "Finance",
  "Health & Wellness",
  "Entertainment",
  "Education",
  "Other",
];

const COUNTRIES = [
  "Nigeria",
  "Kenya",
  "South Africa",
  "Ghana",
  "United States",
  "United Kingdom",
  "Germany",
  "Brazil",
  "Indonesia",
  "Other",
];

type Errors = Partial<Record<keyof BusinessFormData, string>>;

function validate(data: BusinessFormData): Errors {
  const errors: Errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Business Name is required (min 2 chars)";
  }
  if (!data.industry) {
    errors.industry = "Please select an industry";
  }
  if (!data.country) {
    errors.country = "Please select a country";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Valid email is required";
  }
  if (data.website && !/^https:\/\//.test(data.website)) {
    errors.website = "URL must start with https://";
  }
  return errors;
}

export function BusinessForm({
  data,
  onChange,
  onSubmit,
  onBack,
}: BusinessFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleChange = (field: keyof BusinessFormData, value: string) => {
    const next = { ...data, [field]: value };
    onChange(next);
    if (touched.has(field)) {
      const errs = validate(next);
      setErrors((prev) => {
        const updated = { ...prev };
        if (errs[field]) {
          updated[field] = errs[field]!;
        } else {
          delete updated[field];
        }
        return updated;
      });
    }
  };

  const handleBlur = (field: keyof BusinessFormData) => {
    setTouched((prev) => new Set(prev).add(field));
    const errs = validate(data);
    if (errs[field]) {
      setErrors((prev) => ({ ...prev, [field]: errs[field]! }));
    } else {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    setTouched(new Set(["name", "industry", "country", "email", "website"]));
    if (Object.keys(errs).length === 0) {
      onSubmit();
    }
  };

  const inputClass = (field: keyof BusinessFormData) =>
    `w-full h-12 bg-[var(--db-surface-high)] border ${
      errors[field] && touched.has(field)
        ? "border-[#ef4444]"
        : "border-[var(--db-outline-variant)]"
    } rounded-[4px] px-3 text-[14px] font-geist text-[var(--db-on-surface)] outline-none transition-colors focus:border-[var(--db-primary-container)] placeholder:text-[var(--db-on-surface-variant)]`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-0">
        <div className="flex-1 p-8">
          <h2 className="font-sora text-[24px] font-semibold text-[var(--db-on-surface)]">
            Business Identity
          </h2>
          <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 mb-6">
            Define how you will appear in the creator marketplace. This
            information helps us tailor your campaign opportunities.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Business Name
              </label>
              <input
                className={inputClass("name")}
                placeholder="e.g. Atlas Digital Group"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
              />
              {errors.name && touched.has("name") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                  Industry
                </label>
                <select
                  className={inputClass("industry")}
                  value={data.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  onBlur={() => handleBlur("industry")}
                >
                  <option value="">Select Industry</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && touched.has("industry") && (
                  <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                    {errors.industry}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                  Country
                </label>
                <select
                  className={inputClass("country")}
                  value={data.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  onBlur={() => handleBlur("country")}
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.country && touched.has("country") && (
                  <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Business Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <input
                  className={`${inputClass("email")} pl-9`}
                  placeholder="hello@yourbusiness.com"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
              </div>
              {errors.email && touched.has("email") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Website or Social Link
              </label>
              <div className="relative">
                <LinkIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <input
                  className={`${inputClass("website")} pl-9`}
                  placeholder="https://"
                  type="url"
                  value={data.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  onBlur={() => handleBlur("website")}
                />
              </div>
              {errors.website && touched.has("website") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.website}
                </p>
              )}
            </div>

            <div>
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Brief Description
              </label>
              <textarea
                className={`${inputClass("description")} min-h-[96px] resize-none py-3`}
                placeholder="Tell us about your brand vision..."
                rows={4}
                value={data.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 h-12 rounded-[4px] bg-[var(--db-primary-container)] text-[var(--db-on-primary)] font-geist text-[13px] font-semibold hover:opacity-90 transition-opacity"
              >
                Continue to Dashboard{" "}
                <ArrowRight size={16} className="inline mb-[2px] ml-0.5" />
              </button>
              <button
                type="button"
                onClick={onBack}
                className="h-12 px-6 rounded-[4px] border border-[var(--db-on-surface)] text-[var(--db-on-surface)] font-geist text-[13px] font-semibold hover:bg-[var(--db-surface-high)] transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-between w-[42%] p-8 border-l border-[var(--db-outline-variant)]">
          <div className="self-end">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              style={{ transform: "rotate(6deg)" }}
            >
              <path
                d="M32 4L52 12V28C52 42 40 54 32 58C24 54 12 42 12 28V12L32 4Z"
                stroke="#343332"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 32L30 38L40 26"
                stroke="#343332"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="w-8 h-0.5 bg-[var(--db-primary-container)] mb-4" />
            <h3 className="font-sora text-[20px] font-semibold text-[var(--db-on-surface)]">
              Verified for Creators.
            </h3>
            <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-3 leading-relaxed">
              Completing your profile unlocks the AdsBazaar verified badge,
              increasing response rates from top-tier talent by 40%.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
