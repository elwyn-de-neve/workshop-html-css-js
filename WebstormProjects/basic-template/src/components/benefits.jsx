import { Button } from "@/components/ui/button";

function Benefits() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At AI Automation Agency, we are passionate about leveraging the
              power of artificial intelligence to transform businesses. Our team
              of experts works closely with clients to develop cutting-edge AI
              solutions that drive efficiency, boost productivity, and unlock
              new opportunities.
            </p>
            <Button variant="secondary">Learn More</Button>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="About Image"
              className="rounded-lg shadow-lg"
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
