import Link from "next/link";
import { BotIcon, OptionIcon, PieChartIcon } from "lucide-react";

function Services() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <BotIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">AI Automation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Streamline your workflows and boost productivity with our
              cutting-edge AI automation solutions.
            </p>
            <Link className="text-primary hover:underline mt-2" href="#">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <PieChartIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">AI Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Unlock valuable insights and make data-driven decisions with our
              advanced AI analytics tools.
            </p>
            <Link className="text-primary hover:underline mt-2" href="#">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <OptionIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">AI Optimization</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enhance your operations and decision-making with our AI-powered
              optimization solutions.
            </p>
            <Link className="text-primary hover:underline mt-2" href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
