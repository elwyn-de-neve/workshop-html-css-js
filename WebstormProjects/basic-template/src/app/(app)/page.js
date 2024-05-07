import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { BentoGridDemo } from "@/components/bento-grid-demo";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Features />
      <BentoGridDemo />
      <Testimonials />
    </>
  );
}
