import logo from "../assets/Jailey-Foundation-Logo.svg";
import { useEffect, useState } from "react";
import EnrollmentModal from "./EnrollmentModal";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuOpen(true);
      setIsModalOpen(true);
    }, 2000);
  }, []);

  return (
    <>
      <header className="max-w-[1300px] mx-auto py-6 px-2">
        <div className="flex justify-between items-center">
          <h1>
            <a href="#" className="flex cursor-pointer">
              <img src={logo} className="mr-2 md:mr-3 w-4 md:w-auto" />
              <p className="text-sm md:text-base">
                Jalei<span className="font-pacifico"></span> Foundation
              </p>
            </a>
          </h1>

          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center [&>li]:mr-4">
              <li>
                <a href="#problem">The Problem</a>
              </li>
              <li>
                <a href="#solution">The Solution</a>
              </li>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li className="mr-10!">
                <a href="#about">About Us</a>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-cta rounded-md py-3 px-10 text-white"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#problem"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Solution
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-cta rounded-md py-3 px-6 text-white block text-center w-full"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
