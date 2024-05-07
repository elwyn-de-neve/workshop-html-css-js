import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  AI Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Finance
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Retail
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Email
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Phone
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Address
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            © 2024 AI Automation Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
