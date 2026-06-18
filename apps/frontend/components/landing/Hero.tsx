import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center w-full">
        <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant mb-[16px]">
          DECENTRALIZED ADVERTISING ON STELLAR
        </span>
        <h1 className="font-sora font-[800] text-[40px] md:text-[72px] leading-[1.1] tracking-[-0.04em] text-on-surface max-w-[900px] mb-[40px]">
          The Trust Layer for Global Creator Campaigns.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/onboarding/role?intent=business"
            className="bg-primary-container text-on-primary font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] w-full sm:w-auto inline-flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            Start a campaign
          </Link>
          <Link
            href="/onboarding/role?intent=creator"
            className="bg-transparent border border-on-surface text-on-surface font-geist font-semibold text-[16px] h-[48px] px-8 rounded-[4px] w-full sm:w-auto inline-flex items-center justify-center hover:bg-surface-container transition-colors"
          >
            Find campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}
