import Image from "next/image";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-1">
      <div className="container mx-auto mt-4 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <Image
              src="/assets/logo.png"
              height={80}
              width={80}
              className="rounded-xl"
              alt=""
            />
          </div>

          <div className="flex-1">
            <p className="uppercase font-extrabold text-black md:mb-6">
              Social
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://t.me/rainbowkingdoms"
                  className="flex font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FaTelegramPlane size="1.4em" className="mr-1" />
                  Telegram
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/RainbowKingdoms"
                  className="flex font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FaTwitter size="1.4em" className="mr-1" />
                  Twitter
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://github.com/Rainbow-Kingdoms"
                  className="flex font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FaGithub size="1.4em" className="mr-1" />
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-black md:mb-6">Blog</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-black md:mb-6">More</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            
          </div>
        </div>
      </div>
    </footer>
  );
}
