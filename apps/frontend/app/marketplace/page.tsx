import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Marketplace — AdsBazaar",
};
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero";
import { MarketplaceFilters } from "@/components/marketplace/marketplace-filters";
import { MarketplaceGridHeader } from "@/components/marketplace/marketplace-grid-header";
import { MarketplaceGrid } from "@/components/marketplace/marketplace-grid";
import { MarketplacePagination } from "@/components/marketplace/marketplace-pagination";
import { MarketplaceNewsletter } from "@/components/marketplace/marketplace-newsletter";

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-20">
        <MarketplaceHero />
        <MarketplaceFilters />
        <MarketplaceGridHeader count={128} />
        <MarketplaceGrid />
        <MarketplacePagination totalPages={12} />
      </main>
      <MarketplaceNewsletter />
      <Footer />
    </>
  );
}
