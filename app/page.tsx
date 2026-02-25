import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/landing-page/hero";
import { Stats } from "@/components/landing-page/stats";
import { PartnersSection } from "@/components/landing-page/partners-section";
import { Features } from "@/components/landing-page/features";
import { FocusSection } from "@/components/landing-page/focus-section";
import { Pricing } from "@/components/landing-page/pricing";
import { CTA } from "@/components/landing-page/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-[#181111] font-sans">
      <Navbar />
      <main>
        <Hero />
        <PartnersSection />
        <Features />
        <Stats />
        <FocusSection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
