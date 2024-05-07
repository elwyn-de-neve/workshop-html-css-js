import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, BookText } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-[80vh] bg-gray-800">
      <Image
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/placeholder.svg"
        width={1920}
        height={1080}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Unlock the Power of AI Automation
        </h1>
        <p className="mt-3 text-lg sm:mt-5 sm:text-xl md:mt-6 md:text-2xl">
          Transform your business with our cutting-edge AI solutions.
        </p>
        <div className="flex align-middle gap-x-4">
          <Button className="mt-8 space-x-4">
            <span>Get started</span>
            <ArrowRight size={16} />
          </Button>
          <Button className="mt-8 space-x-4" variant="secondary">
            <BookText size={16} />
            <span>Read the docs</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
