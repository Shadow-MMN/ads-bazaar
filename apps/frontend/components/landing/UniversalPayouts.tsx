export function UniversalPayouts() {
  return (
    <section className="py-16 md:py-[100px] px-6 bg-[#181818] border-y border-white/[0.03]">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="font-sora font-[600] text-[32px] text-on-surface mb-12">
          Universal Payouts. Local Context.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {/* USDC */}
          <div className="bg-[#131313] border border-white/[0.06] rounded-[8px] p-6 flex flex-col items-center justify-center w-[160px] md:w-[240px] h-[160px] md:h-[180px]">
            <div className="w-[56px] h-[56px] bg-white rounded-[14px] flex items-center justify-center mb-5 shadow-sm">
              <span className="font-geist font-[800] text-[#131313] text-[15px]">USDC</span>
            </div>
            <span className="font-geist font-[700] text-[12px] text-on-surface tracking-wide">Stablecoin</span>
          </div>
          {/* XLM */}
          <div className="bg-[#131313] border border-white/[0.06] rounded-[8px] p-6 flex flex-col items-center justify-center w-[160px] md:w-[240px] h-[160px] md:h-[180px]">
            <div className="w-[56px] h-[56px] bg-primary-container rounded-[14px] flex items-center justify-center mb-5 shadow-sm">
              <span className="font-geist font-[800] text-[#131313] text-[15px]">XLM</span>
            </div>
            <span className="font-geist font-[700] text-[12px] text-on-surface tracking-wide">Network Asset</span>
          </div>
          {/* NGN */}
          <div className="bg-[#131313] border border-white/[0.06] rounded-[8px] p-6 flex flex-col items-center justify-center w-[160px] md:w-[240px] h-[160px] md:h-[180px]">
            <div className="w-[56px] h-[56px] bg-[#10a151] rounded-[14px] flex items-center justify-center mb-5 shadow-sm">
              <span className="font-geist font-[800] text-white text-[15px]">NGN</span>
            </div>
            <span className="font-geist font-[700] text-[12px] text-on-surface tracking-wide">Nigerian Naira</span>
          </div>
          {/* KES */}
          <div className="bg-[#131313] border border-white/[0.06] rounded-[8px] p-6 flex flex-col items-center justify-center w-[160px] md:w-[240px] h-[160px] md:h-[180px]">
            <div className="w-[56px] h-[56px] bg-[#ff0000] rounded-[14px] flex items-center justify-center mb-5 shadow-sm">
              <span className="font-geist font-[800] text-white text-[15px]">KES</span>
            </div>
            <span className="font-geist font-[700] text-[12px] text-on-surface tracking-wide">Kenyan Shilling</span>
          </div>
        </div>

        <p className="font-geist text-[15px] text-on-surface-variant max-w-[640px] mx-auto leading-relaxed">
          Leveraging Stellar's global anchor network to bridge digital assets to local currency bank accounts in minutes, not days.
        </p>
      </div>
    </section>
  );
}
