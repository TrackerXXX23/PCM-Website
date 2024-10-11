import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-12">
          {/* Logo and contact info */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="mb-4">
              <Logo />
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Email: <a href="mailto:info@pcmfinancial.ca" className="hover:text-gray-900">info@pcmfinancial.ca</a></p>
              <p>Phone: <a href="tel:306-861-4995" className="hover:text-gray-900">306-861-4995</a></p>
              <p>Weyburn, SK</p>
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-medium mb-2">Services</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/services#insurance">Insurance Solutions</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/services#wealth-management">Wealth Management</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/services#succession-planning">Succession Planning</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-medium mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/resources">Resources</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-12 lg:col-span-2">
            <h3 className="text-sm font-medium mb-2">Connect</h3>
            <ul className="flex space-x-4">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/chetpaslawski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202C17.912 6.26 20 7.986 20 11.558V20zM2.442 4.921A2.451 2.451 0 0 1 0 2.46 2.451 2.451 0 0 1 2.442 0a2.451 2.451 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461zM0 20h5V7H0v13z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} PCM Financial Services - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
