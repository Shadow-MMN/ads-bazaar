export type CampaignDetail = {
  id: string;
  title: string;
  brand: string;
  brandIconPath: string;
  category: string;
  heroImagePath: string;
  brief: string;
  targetAudience: string;
  deliverables: string;
  requirements: string[];
  budget: string;
  currency: string;
  fundsLocked: string;
  smartContract: string;
  smartContractUrl: string;
  payoutSchedule: string;
  contentFormats: string[];
};

export const campaignDetailMock: CampaignDetail = {
  id: "quantum-wearables",
  title: "Quantum Wearables: Summer Launch",
  brand: "Stellar Labs Inc.",
  brandIconPath: "/images/brand-icon-placeholder.png",
  category: "TECH & LIFESTYLE",
  heroImagePath: "/images/campaign-hero-placeholder.png",
  brief:
    "We are launching the next generation of biometric integration. We're looking for professional creators who can blend technical performance with lifestyle aesthetics. Your content should highlight the seamless integration of our SDK into the daily life of a high-performance individual.",
  targetAudience:
    "Tech Enthusiasts, Professional Athletes, and Bio-hackers aged 24-45.",
  deliverables:
    "1x Long-form Video Review, 3x High-res Photography Posts, 2x Story Sequences.",
  requirements: [
    "Minimum 50k following on YouTube or Instagram.",
    "History of tech-focused or lifestyle-performance content.",
    "Located in Tier-1 markets (US, UK, EU, CAN).",
  ],
  budget: "$4,500.00",
  currency: "USDC",
  fundsLocked: "4,500.00  USDC",
  smartContract: "Stellar::x4A...2fB",
  smartContractUrl: "https://stellar.expert/explorer/testnet/contract/placeholder",
  payoutSchedule: "50% Advance / 50% Final",
  contentFormats: [
    "Video Review (Primary)",
    "Photography Posts",
    "Instagram Stories",
    "TikTok Short",
  ],
};
