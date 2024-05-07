import Image from "next/image";

function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <blockquote className="text-gray-600 dark:text-gray-400 mb-4">
              "The AI Automation Agency team has been a game-changer for our
              business. Their solutions have streamlined our workflows and
              unlocked new levels of efficiency."
            </blockquote>
            <div className="flex items-center">
              <Image
                alt="Client 1"
                className="w-12 h-12 rounded-full mr-4"
                src="/placeholder.svg"
                width={48}
                height={48}
              />
              <div>
                <h4 className="text-lg font-bold">John Doe</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  CEO, Acme Corp
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <blockquote className="text-gray-600 dark:text-gray-400 mb-4">
              "Working with the AI Automation Agency has been a transformative
              experience. Their innovative solutions have helped us stay ahead
              of the curve."
            </blockquote>
            <div className="flex items-center">
              <Image
                alt="Client 2"
                className="w-12 h-12 rounded-full mr-4"
                src="/placeholder.svg"
                width={48}
                height={48}
              />
              <div>
                <h4 className="text-lg font-bold">Jane Smith</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  CTO, Globex Inc
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <blockquote className="text-gray-600 dark:text-gray-400 mb-4">
              "The AI Automation Agency has been a true partner in our digital
              transformation journey. Their expertise and cutting-edge solutions
              have been invaluable."
            </blockquote>
            <div className="flex items-center">
              <Image
                alt="Client 3"
                className="w-12 h-12 rounded-full mr-4"
                src="/placeholder.svg"
                width={48}
                height={48}
              />
              <div>
                <h4 className="text-lg font-bold">Michael Johnson</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  COO, Megacorp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
