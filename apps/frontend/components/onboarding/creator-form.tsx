"use client";

import { useState } from "react";
import { Users, Link as LinkIcon, ArrowRight } from "lucide-react";

type CreatorFormData = {
  displayName: string;
  category: string;
  country: string;
  audienceSize: string;
  socialLink: string;
  bio: string;
};

type CreatorFormProps = {
  data: CreatorFormData;
  onChange: (data: CreatorFormData) => void;
  onSubmit: () => void;
  onSkip: () => void;
};

const CATEGORIES = [
  "Gaming",
  "Lifestyle",
  "Tech",
  "Fashion",
  "Food",
  "Finance",
  "Travel",
  "Education",
  "Fitness",
  "Music",
  "Art",
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

const AUDIENCE_SIZES = [
  "Under 1K",
  "1K–10K",
  "10K–100K",
  "100K–500K",
  "500K–1M",
  "1M+",
];

const BIO_MAX = 160;

type Errors = Partial<Record<keyof CreatorFormData, string>>;

function validate(data: CreatorFormData): Errors {
  const errors: Errors = {};
  if (!data.displayName || data.displayName.trim().length < 2) {
    errors.displayName = "Display Name is required (min 2 chars)";
  }
  if (!data.category) {
    errors.category = "Please select a niche";
  }
  if (!data.country) {
    errors.country = "Please select a region";
  }
  if (!data.audienceSize) {
    errors.audienceSize = "Please select a range";
  }
  if (!data.socialLink || !/^https:\/\//.test(data.socialLink)) {
    errors.socialLink = "A valid https:// link is required";
  }
  if (!data.bio || data.bio.trim().length === 0) {
    errors.bio = "Short bio is required";
  } else if (data.bio.length > BIO_MAX) {
    errors.bio = `Bio must be ${BIO_MAX} characters or less`;
  }
  return errors;
}

export function CreatorForm({
  data,
  onChange,
  onSubmit,
  onSkip,
}: CreatorFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleChange = (field: keyof CreatorFormData, value: string) => {
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

  const handleBlur = (field: keyof CreatorFormData) => {
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
    setTouched(
      new Set([
        "displayName",
        "category",
        "country",
        "audienceSize",
        "socialLink",
        "bio",
      ]),
    );
    if (Object.keys(errs).length === 0) {
      onSubmit();
    }
  };

  const inputClass = (field: keyof CreatorFormData) =>
    `w-full h-12 bg-[var(--db-surface-high)] border ${
      errors[field] && touched.has(field)
        ? "border-[#ef4444]"
        : "border-[var(--db-outline-variant)]"
    } rounded-[4px] px-3 text-[14px] font-geist text-[var(--db-on-surface)] outline-none transition-colors focus:border-[var(--db-primary-container)] placeholder:text-[var(--db-on-surface-variant)]`;

  const charsLeft = BIO_MAX - data.bio.length;
  const nearLimit = charsLeft <= 20;

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-8">
        <h2 className="font-sora text-[24px] font-semibold text-[var(--db-on-surface)]">
          Define your creator profile
        </h2>
        <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 mb-6">
          Help us tailor the best sponsorship opportunities for your specific
          audience and niche.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
              Display Name
            </label>
            <input
              className={inputClass("displayName")}
              placeholder="e.g. Alex Creator"
              value={data.displayName}
              onChange={(e) => handleChange("displayName", e.target.value)}
              onBlur={() => handleBlur("displayName")}
            />
            {errors.displayName && touched.has("displayName") && (
              <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                {errors.displayName}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Category
              </label>
              <select
                className={inputClass("category")}
                value={data.category}
                onChange={(e) => handleChange("category", e.target.value)}
                onBlur={() => handleBlur("category")}
              >
                <option value="">Select Niche</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && touched.has("category") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.category}
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
                <option value="">Primary Region</option>
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

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Audience Size
              </label>
              <div className="relative">
                <Users
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <select
                  className={`${inputClass("audienceSize")} pl-9`}
                  value={data.audienceSize}
                  onChange={(e) => handleChange("audienceSize", e.target.value)}
                  onBlur={() => handleBlur("audienceSize")}
                >
                  <option value="">Follower Range</option>
                  {AUDIENCE_SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              {errors.audienceSize && touched.has("audienceSize") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.audienceSize}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
                Primary Social Link
              </label>
              <div className="relative">
                <LinkIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--db-on-surface-variant)]"
                />
                <input
                  className={`${inputClass("socialLink")} pl-9`}
                  placeholder="https://"
                  type="url"
                  value={data.socialLink}
                  onChange={(e) => handleChange("socialLink", e.target.value)}
                  onBlur={() => handleBlur("socialLink")}
                />
              </div>
              {errors.socialLink && touched.has("socialLink") && (
                <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                  {errors.socialLink}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-geist text-[12px] font-semibold uppercase text-[var(--db-on-surface-variant)] mb-1">
              Short Bio
            </label>
            <textarea
              className={`${inputClass("bio")} min-h-[96px] resize-none py-3`}
              placeholder="Tell brands what makes your content unique..."
              rows={4}
              maxLength={BIO_MAX + 20}
              value={data.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              onBlur={() => handleBlur("bio")}
            />
            <div className="flex items-center justify-end mt-1">
              <span
                className={`font-geist text-[10px] uppercase ${
                  nearLimit
                    ? "text-[#ef4444]"
                    : "text-[var(--db-on-surface-variant)]"
                }`}
              >
                {data.bio.length} / {BIO_MAX} CHARACTERS
              </span>
            </div>
            {errors.bio && touched.has("bio") && (
              <p className="font-geist text-[12px] text-[#ef4444] mt-1">
                {errors.bio}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 h-12 rounded-[4px] bg-[var(--db-primary-container)] text-[var(--db-on-primary)] font-geist text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              Complete Profile{" "}
              <ArrowRight size={16} className="inline mb-[2px] ml-0.5" />
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="h-12 px-6 rounded-[4px] border border-[var(--db-on-surface)] text-[var(--db-on-surface)] font-geist text-[13px] font-semibold hover:bg-[var(--db-surface-high)] transition-colors"
            >
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
