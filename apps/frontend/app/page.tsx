import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { FeatureCards } from "../components/landing/FeatureCards";
import { UniversalPayouts } from "../components/landing/UniversalPayouts";
import { BrandsCreators } from "../components/landing/BrandsCreators";
import { SeamlessWorkflow } from "../components/landing/SeamlessWorkflow";
import { FinalCta } from "../components/landing/FinalCta";
import { Footer } from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-geist selection:bg-primary-container selection:text-on-primary">
      <Navbar />
      <Hero />
      <FeatureCards />
      <UniversalPayouts />
      <BrandsCreators />
      <SeamlessWorkflow />
      <FinalCta />
      <Footer />
    </div>
  );
}
