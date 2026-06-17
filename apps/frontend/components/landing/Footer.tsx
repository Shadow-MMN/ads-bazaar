import { Globe, AtSign, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-background">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <a href="#" className="font-sora font-bold text-xl text-on-surface mb-4">
              AdsBazaar
            </a>
            <p className="font-geist text-[14px] text-on-surface-variant max-w-[240px]">
              Building the future of decentralized creator economics on Stellar.
            </p>
          </div>
          
          {/* Platform Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-geist font-semibold text-[12px] uppercase tracking-[0.05em] text-on-surface mb-2">Platform</h4>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Marketplace</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Campaign Dashboard</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Smart Contracts</a>
          </div>

          {/* Network Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-geist font-semibold text-[12px] uppercase tracking-[0.05em] text-on-surface mb-2">Network</h4>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Stellar Hub</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Soroban SDK</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Global Anchors</a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-geist font-semibold text-[12px] uppercase tracking-[0.05em] text-on-surface mb-2">Legal</h4>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Terms of Service</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Privacy Policy</a>
            <a href="#" className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface">Safety Center</a>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-geist text-[14px] text-on-surface-variant">
            © 2024 AdsBazaar Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Website" className="text-on-surface-variant hover:text-on-surface">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Email" className="text-on-surface-variant hover:text-on-surface">
              <AtSign className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Share" className="text-on-surface-variant hover:text-on-surface">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
