import Link from "next/link";
import Image from "next/image";

function Features() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Finance"
              className="rounded-lg shadow-lg mb-4"
              src="/placeholder.svg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">Finance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Optimize financial operations and decision-making with our
              AI-powered solutions.
            </p>
            <Link className="text-primary hover:underline mt-2" href="#">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Healthcare"
              className="rounded-lg shadow-lg mb-4"
              src="/placeholder.svg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">Healthcare</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transform healthcare with our AI-driven solutions for improved
              patient outcomes.
            </p>
            <Link className="text-primary hover:underline mt-2" href="#">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Retail"
              className="rounded-lg shadow-lg mb-4"
              src="/placeholder.svg"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">Retail</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enhance customer experience and optimize operations with our
              AI-powered retail solutions.
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

export default Features;
