import React from "react";
import { FaInstagram, FaBehance, FaPinterest, FaLinkedin } from "react-icons/fa";
import Magnetic from "./Magnetic";

export default function WaveFooter({ onConnectClick }) {
  const socials = [
    { id: 1, icon: FaInstagram, label: "Instagram", url: "https://instagram.com" },
    { id: 2, icon: FaBehance, label: "Behance", url: "https://behance.net" },
    { id: 3, icon: FaPinterest, label: "Pinterest", url: "https://pinterest.com" },
    { id: 4, icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" }
  ];

  return (
    <footer className="w-full relative z-20 mt-auto select-none">
      {/* Wave Arched Cap with Thick Border */}
      <div className="w-full relative -mb-1">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 block pointer-events-none"
        >
          {/* Closed shape filled with white, stroke only on the upper curve */}
          <path
            d="M 0 100 Q 720 15 1440 100 L 1440 110 L 0 110 Z"
            fill="#ffffff"
          />
          <path
            d="M 0 100 Q 720 15 1440 100"
            fill="none"
            stroke="#111111"
            strokeWidth="5"
          />
        </svg>
      </div>

      {/* Main Footer Body */}
      <div className="bg-brand-white w-full border-t-0 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 h-auto md:h-[160px]">
        {/* Left: Connect Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Magnetic>
            <button
              onClick={onConnectClick}
              id="footer-connect-btn"
              className="py-3 px-8 text-lg font-black bg-brand-white text-brand-black rounded-[16px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1 transition-all duration-300 interactive-hover"
            >
              Connect
            </button>
          </Magnetic>
        </div>

        {/* Center: Brand Credit */}
        <div className="text-center font-bold text-sm tracking-widest uppercase text-brand-black/60">
          Powered & Secured by Zywo
        </div>

        {/* Right: Social Square Buttons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Magnetic key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-brand-white text-brand-black border-[4px] border-brand-black rounded-[8px] brutalist-shadow-sm flex items-center justify-center text-xl transition-all duration-200 hover:-translate-y-2 hover:bg-brand-black hover:text-brand-white hover:brutalist-shadow active:translate-y-0 interactive-hover"
                >
                  <Icon />
                </a>
              </Magnetic>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
