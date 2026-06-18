import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-12 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[40px] md:p-[80px] text-center max-w-[1000px] mx-auto">
        <h2 className="font-sora font-[800] text-[32px] md:text-[40px] text-on-surface mb-6">
          Ready to scale your influence?
        </h2>
        <p className="font-geist text-[16px] md:text-[18px] text-on-surface-variant mb-10 max-w-[600px] mx-auto">
          Join the marketplace where trust is decentralized and growth is global.
        </p>
        <Link
          href="/onboarding/role?intent=business"
          className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[56px] px-10 rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          Launch a Campaign
        </Link>
      </div>
    </section>
  );
}
