import { FileText, Lock, Shield, Search, Zap, Wallet } from "lucide-react";

export function BrandsCreators() {
  return (
    <section className="py-12 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-[8px] border border-outline-variant overflow-hidden">
        {/* Left Column - Brands */}
        <div className="bg-surface-container p-[32px] md:p-[64px]">
          <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-primary-container mb-6 block">
            FOR BRANDS
          </span>
          <h2 className="font-sora font-[600] text-[32px] text-on-surface mb-12">
            Deploy Capital with Precision
          </h2>
          
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <div className="mt-1"><FileText className="w-6 h-6 text-on-surface" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-2">Define Brief</h3>
                <p className="font-geist text-[16px] text-on-surface-variant">Upload deliverables, timeline, and budget.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Lock className="w-6 h-6 text-on-surface" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-2">Fund Escrow</h3>
                <p className="font-geist text-[16px] text-on-surface-variant">Lock funds safely in a Soroban contract.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Shield className="w-6 h-6 text-on-surface" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-2">Review & Approve</h3>
                <p className="font-geist text-[16px] text-on-surface-variant">Pay only once work is verified via social APIs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Creators */}
        <div className="bg-[#ffffff] p-[32px] md:p-[64px]">
          <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-[#666666] mb-6 block">
            FOR CREATORS
          </span>
          <h2 className="font-sora font-[600] text-[32px] text-[#131313] mb-12">
            Monetize Your Influence
          </h2>
          
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <div className="mt-1"><Search className="w-6 h-6 text-[#131313]" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-[#131313] mb-2">Explore Gigs</h3>
                <p className="font-geist text-[16px] text-[#4a4a4a]">Filter campaigns by niche, rate, and platform.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Zap className="w-6 h-6 text-[#131313]" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-[#131313] mb-2">Execute Fast</h3>
                <p className="font-geist text-[16px] text-[#4a4a4a]">Submit content proof and trigger smart releases.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Wallet className="w-6 h-6 text-[#131313]" /></div>
              <div>
                <h3 className="font-sora font-[600] text-[18px] text-[#131313] mb-2">Instant Payout</h3>
                <p className="font-geist text-[16px] text-[#4a4a4a]">Receive XLM or stablecoins directly to your wallet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
