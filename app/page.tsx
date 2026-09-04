import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesOverview />
      </main>
    </>
  );
}
