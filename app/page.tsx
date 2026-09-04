import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { HowItWorks } from "@/components/how-it-works";
import { TheStandard } from "@/components/the-standard";
import { ServiceAreas } from "@/components/service-areas";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesOverview />
        <HowItWorks />
        <TheStandard />
        <ServiceAreas />
        <FAQ />
      </main>
    </>
  );
}
