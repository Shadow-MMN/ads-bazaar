export function SeamlessWorkflow() {
  return (
    <section className="py-12 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      <h2 className="font-sora font-[600] text-[32px] text-on-surface text-center mb-12">
        Seamless Workflow
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Step 1 */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col items-start min-h-[220px]">
          <span className="font-geist font-[600] text-[14px] text-primary-container mb-6 block">
            01
          </span>
          <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-3">Connect</h3>
          <p className="font-geist text-[14px] text-on-surface-variant">Link your Stellar wallet and social identity profiles.</p>
        </div>
        {/* Step 2 */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col items-start min-h-[220px]">
          <span className="font-geist font-[600] text-[14px] text-primary-container mb-6 block">
            02
          </span>
          <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-3">Stake</h3>
          <p className="font-geist text-[14px] text-on-surface-variant">Campaign funds are staked into a secure escrow contract.</p>
        </div>
        {/* Step 3 */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col items-start min-h-[220px]">
          <span className="font-geist font-[600] text-[14px] text-primary-container mb-6 block">
            03
          </span>
          <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-3">Create</h3>
          <p className="font-geist text-[14px] text-on-surface-variant">Content is produced and uploaded to the bazaar registry.</p>
        </div>
        {/* Step 4 */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col items-start min-h-[220px]">
          <span className="font-geist font-[600] text-[14px] text-primary-container mb-6 block">
            04
          </span>
          <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-3">Verify</h3>
          <p className="font-geist text-[14px] text-on-surface-variant">Autonomous or manual verification of campaign success.</p>
        </div>
        {/* Step 5 */}
        <div className="bg-surface-container border border-outline-variant rounded-[8px] p-[24px] flex flex-col items-start min-h-[220px]">
          <span className="font-geist font-[600] text-[14px] text-primary-container mb-6 block">
            05
          </span>
          <h3 className="font-sora font-[600] text-[18px] text-on-surface mb-3">Release</h3>
          <p className="font-geist text-[14px] text-on-surface-variant">Funds are released to the creator's wallet instantly.</p>
        </div>
      </div>
    </section>
  );
}
