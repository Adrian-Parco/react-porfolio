import { useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 drop-shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly mt-5 h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="logo" className="w-20" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="hover:bg-blue-900 hover:text-white ease-in duration-300  px-3 py-2 rounded-md text-md font-medium"
                >
                  About Me
                </a>

                <a
                  href="/"
                  className="hover:bg-blue-900 hover:text-white ease-in duration-300 px-3 py-2 rounded-md text-md font-medium"
                >
                  Projects
                </a>

                <a
                  href="/"
                  className="hover:bg-blue-900 hover:text-white ease-in duration-300 px-3 py-2 rounded-md text-md font-medium"
                >
                  Skills
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6 bg-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="text-white"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 bg-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    className="text-white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-blue-900 text-white md:hidden ">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="hover:bg-blue-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </a>

            <a
              href="/"
              className="hover:bg-blue-900  block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="/"
              className="hover:bg-blue-900   block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
