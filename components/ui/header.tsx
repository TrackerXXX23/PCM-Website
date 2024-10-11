import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 bg-white/95 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/services"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/resources"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Resources
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/contact"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop call to action */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Get Started
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
