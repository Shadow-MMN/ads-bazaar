import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RoleCardProps = {
  role: "business" | "creator";
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  highlighted?: boolean;
};

export function RoleCard({
  icon,
  title,
  description,
  href,
  highlighted,
}: RoleCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col bg-[var(--db-surface)] border ${
        highlighted
          ? "border-[var(--db-primary-container)]"
          : "border-[var(--db-outline-variant)]"
      } rounded-[8px] p-8 w-full md:w-[360px] transition-all duration-150 hover:border-[var(--db-primary-container)] group`}
    >
      <div className="w-10 h-10 bg-[var(--db-surface-high)] rounded-[4px] flex items-center justify-center">
        <span className="text-[var(--db-on-surface)]">{icon}</span>
      </div>
      <h3 className="font-sora text-[24px] font-semibold text-[var(--db-on-surface)] mt-6">
        {title}
      </h3>
      <p className="font-geist text-[16px] text-[var(--db-on-surface-variant)] mt-3 leading-relaxed">
        {description}
      </p>
      <span className="font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-[var(--db-primary-container)] mt-8">
        SELECT ROLE <ArrowRight size={12} className="inline" />
      </span>
    </Link>
  );
}
