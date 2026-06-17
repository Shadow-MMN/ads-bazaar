import { Lock } from "lucide-react";

export function FeatureCards() {
  return (
    <section className="py-12 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card A */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col min-h-[380px]">
          <Lock className="w-8 h-8 text-primary-container mb-6" />
          <h2 className="font-sora font-[600] text-[24px] text-on-surface mb-4">
            Soroban Smart Escrow
          </h2>
          <p className="font-geist text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed mb-auto">
            Every contract on AdsBazaar is governed by Stellar Soroban smart contracts. Funds are programmatically locked, ensuring that creators get paid and brands get the results they negotiated.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-surface-container-high rounded-[4px] p-4 flex flex-col items-start border border-outline-variant/50">
              <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant mb-1">
                Locked Volume
              </span>
              <span className="font-sora font-bold text-[20px] text-on-surface">
                $2.4M
              </span>
            </div>
            <div className="bg-surface-container-high rounded-[4px] p-4 flex flex-col items-start border border-outline-variant/50">
              <span className="font-geist font-[600] text-[12px] uppercase tracking-[0.05em] text-on-surface-variant mb-1">
                Active Smart Contracts
              </span>
              <span className="font-sora font-bold text-[20px] text-on-surface">
                12.8k
              </span>
            </div>
          </div>
        </div>

        {/* Card B */}
        <div className="relative rounded-[8px] overflow-hidden min-h-[380px] border border-outline-variant group bg-surface-container-high">
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute bottom-0 left-0 right-0 p-[24px] z-20">
            <h2 className="font-sora font-[600] text-[24px] text-on-surface mb-2">
              Unbreakable Trust.
            </h2>
            <p className="font-geist text-[14px] text-on-surface-variant">
              No middleman. No manual releases. Just code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
