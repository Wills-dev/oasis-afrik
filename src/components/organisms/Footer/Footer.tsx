import Link from "next/link";

import Container from "@/components/atoms/Container/Container";
import Logo from "@/components/atoms/Logo/Logo";

const Footer = () => {
  return (
    <footer className="py-24 bg-black w-full">
      <Container>
        <div className="flex justify-between gap-12 flex-wrap w-full">
          <div className="max-w-80 w-full space-y-6">
            <div className="bg-white p-4 rounded-xl w-fit">
              <Logo />
            </div>
            <p className="text-gray-300 max-sm:text-sm">
              Connecting Africa to Global Opportunity:
            </p>
          </div>
          <div className="space-y-6">
            <h6 className="font-medium text-gray-200">Company</h6>
            <ul className="text-sm text-gray-300 space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 duration-300 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 duration-300 transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-gray-400 duration-300 transition-all"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-400 duration-300 transition-all"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-medium text-gray-200">Contact Info</h6>
            <ul className="text-sm text-gray-300 space-y-4">
              <li>Lagos, Nigeria.</li>
              <li>info@oasisafrik.com</li>
              <li>+234 703 777 7777</li>
              <li>+234 703 333 3333</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-medium text-gray-200">Socials</h6>
            <ul className="text-sm text-gray-300 space-y-4">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                {" "}
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  X (Twitter)
                </a>{" "}
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
