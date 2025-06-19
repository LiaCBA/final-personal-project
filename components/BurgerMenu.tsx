"use client";

import { useState } from "react";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="relative w-8 h-8 z-50 flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu">
        <span
          className={`absolute h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.5 w-8 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-[375px] h-full bg-white flex flex-col items-center justify-center gap-8 text-xl z-40 transition-all duration-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-[#757575]">
            Main
          </Link>
          <Link
            href="/pages/classbook"
            onClick={() => setIsOpen(false)}
            className="text-[#757575]">
            Textbook
          </Link>
          <Link
            href="/pages/statistics"
            onClick={() => setIsOpen(false)}
            className="text-[#757575]">
            Statistics
          </Link>
          <Link
            href="/pages/sprint-game"
            onClick={() => setIsOpen(false)}
            className="text-[#757575]">
            Sprint
          </Link>
          <Link
            href="/pages/audiocall-game"
            onClick={() => setIsOpen(false)}
            className="text-[#757575]">
            Audio-Call
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
