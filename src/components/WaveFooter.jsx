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
      <div className="bg-brand-white w-full border-t-0 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Large Neo Brutalist button */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Magnetic>
            <button
              onClick={onConnectClick}
              id="footer-connect-btn"
              className="py-4 px-10 text-xl font-black bg-brand-white text-brand-black rounded-[20px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1.5 hover:rotate-[-2deg] transition-all duration-300 interactive-hover"
            >
              Connect Us
            </button>
          </Magnetic>
        </div>

        {/* Center: Large bold credit text */}
        <div className="font-heading font-black text-xl md:text-2xl tracking-tight text-brand-black uppercase text-center w-full md:w-auto">
          Powered & Secured by Zywo
        </div>

        {/* Right: Social Square Buttons (Instagram, Behance, Pinterest, LinkedIn) */}
        <div className="flex items-center justify-center gap-4 shrink-0">
          {socials.map((social, index) => {
            const Icon = social.icon;
            // Alternating hover rotations for interest
            const hoverRotate = index % 2 === 0 ? "hover:rotate-6" : "hover:rotate-[-6deg]";
            return (
              <Magnetic key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-14 h-14 bg-brand-white text-brand-black border-[4px] border-brand-black rounded-[12px] brutalist-shadow-sm flex items-center justify-center text-2xl transition-all duration-300 hover:-translate-y-2 ${hoverRotate} hover:bg-brand-black hover:text-brand-white hover:brutalist-shadow active:translate-y-0 interactive-hover`}
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
