import React from "react";
import { FaInstagram, FaBehance, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import Magnetic from "./Magnetic";

export default function WaveFooter({ onConnectClick }) {
  const socials = [
    { id: 1, icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { id: 2, icon: FaInstagram, label: "Instagram", url: "https://instagram.com" },
    { id: 3, icon: FaTwitter, label: "X", url: "https://twitter.com" },
    { id: 4, icon: FaYoutube, label: "YouTube", url: "https://youtube.com" },
    { id: 5, icon: FaBehance, label: "Behance", url: "https://behance.net" },
    { id: 6, icon: FaGithub, label: "GitHub", url: "https://github.com" }
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
          {/* Closed shape filled with brand white, stroke only on upper curve */}
          <path
            d="M 0 100 Q 720 15 1440 100 L 1440 110 L 0 110 Z"
            fill="white"
          />
          <path
            d="M 0 100 Q 720 15 1440 100"
            fill="none"
            stroke="#222222"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Main Footer Body */}
      <div className="bg-white w-full border-t-0 px-8 py-12 md:px-16 md:py-16 flex flex-col gap-10">
        
        {/* Top Section: Closing Statement & Philosophy */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-[#222222]/10 pb-10">
          <div className="flex flex-col text-center md:text-left gap-2">
            <h3 className="font-heading font-black text-2xl md:text-4xl text-[#222222] uppercase tracking-tight leading-none">
              Curiosity drives what I build.
            </h3>
            <p className="font-heading font-black text-xl md:text-3xl text-[#555555] uppercase tracking-tight leading-none text-left">
              Creativity shapes how I build it.
            </p>
          </div>

          <div className="shrink-0">
            <Magnetic>
              <button
                onClick={onConnectClick}
                id="footer-connect-btn"
                className="py-4 px-10 text-xl font-black bg-[#FFD45C] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out cursor-pointer interactive-hover"
              >
                Let's Connect
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Bottom Section: Branding & Social Handles */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1 text-left">
            <span className="font-heading font-black text-lg md:text-xl uppercase tracking-wider text-[#222222]">
              Rayan Hany
            </span>
            <span className="text-xs font-sans font-medium text-[#555555]">
              Founder & CEO &bull; Zywo &bull; Fluxify &bull; Fluxiflow
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 shrink-0 flex-wrap">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Magnetic key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 bg-white text-[#222222] border-2 border-[#222222] rounded-xl shadow-[2.5px_2.5px_0px_0px_#222222] flex items-center justify-center text-xl transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#FFD45C] hover:shadow-[4px_4px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
                  >
                    <Icon />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        {/* Copyright Credit */}
        <div className="text-center text-[10px] uppercase font-black tracking-widest text-[#555555]/60 mt-4">
          &copy; {new Date().getFullYear()} Rayan Hany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

