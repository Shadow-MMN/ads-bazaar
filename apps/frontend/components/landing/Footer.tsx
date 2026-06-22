import Link from "next/link";
import { AtSign, Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 font-sora text-xl font-bold text-on-surface">
              AdsBazaar
            </Link>
            <p className="max-w-[240px] font-geist text-[14px] text-on-surface-variant">
              Building the future of decentralized creator economics on Stellar.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Platform
            </h4>
            <a
              href="/marketplace"
              className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface"
            >
              Marketplace
            </a>
            <a
              href="/dashboard"
              className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface"
            >
              Campaign Dashboard
            </a>
            <button
              type="button"
              title="Coming soon"
              disabled
              className="cursor-default text-left font-geist text-[14px] text-on-surface-variant opacity-50"
            >
              Smart Contracts
            </button>
          </div>

          {/* Network Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Network
            </h4>
            <a
              href="https://stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface"
            >
              Stellar Hub
            </a>
            <a
              href="https://soroban.stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface"
            >
              Soroban SDK
            </a>
            <a
              href="https://stellar.org/anchors"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-[14px] text-on-surface-variant hover:text-on-surface"
            >
              Global Anchors
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-geist text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface">
              Legal
            </h4>
            <button
              type="button"
              title="Coming soon"
              disabled
              className="cursor-default text-left font-geist text-[14px] text-on-surface-variant opacity-50"
            >
              Terms of Service
            </button>
            <button
              type="button"
              title="Coming soon"
              disabled
              className="cursor-default text-left font-geist text-[14px] text-on-surface-variant opacity-50"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              title="Coming soon"
              disabled
              className="cursor-default text-left font-geist text-[14px] text-on-surface-variant opacity-50"
            >
              Safety Center
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-outline-variant pt-8 md:flex-row md:justify-between">
          <p className="font-geist text-[14px] text-on-surface-variant">
            (c) 2024 AdsBazaar Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              title="Coming soon"
              aria-label="Website"
              disabled
              className="cursor-default text-on-surface-variant opacity-50"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              type="button"
              title="Coming soon"
              aria-label="Email"
              disabled
              className="cursor-default text-on-surface-variant opacity-50"
            >
              <AtSign className="h-5 w-5" />
            </button>
            <button
              type="button"
              title="Coming soon"
              aria-label="Share"
              disabled
              className="cursor-default text-on-surface-variant opacity-50"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
