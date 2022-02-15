import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <a
            className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            Rainbow Kingdoms
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            mobileMenuOpen ? "" : "hidden"
          }  lg:block mt-2 lg:mt-0 text-white p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-500">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/roadmap">
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-500">
                  Roadmap
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/preview">
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-500">
                  Preview
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-500"
                href="#"
              >
                Mint
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-500"
                href="#"
              >
                Stake
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline text-black bg-white font-extrabold rounded mt-4 lg:mt-0 py-2 px-4 shadow ml-3"
          >
            Play
          </button>
        </div>
      </div>
    </nav>
  );
}
