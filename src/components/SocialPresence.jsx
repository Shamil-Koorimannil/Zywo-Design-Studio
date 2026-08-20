import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaBehance, FaGithub } from "react-icons/fa";
import Magnetic from "./Magnetic";

const SOCIALS = [
  {
    id: 1,
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    role: "Executive Network & Brand Strategy",
    color: "group-hover:text-[#0077b5]"
  },
  {
    id: 2,
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
    role: "Creative Portfolios & Visual Art",
    color: "group-hover:text-[#e1306c]"
  },
  {
    id: 3,
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com",
    role: "Filmmaking, Tech & Dynamic Content",
    color: "group-hover:text-[#ff0000]"
  },
  {
    id: 4,
    name: "X (Twitter)",
    icon: FaTwitter,
    url: "https://twitter.com",
    role: "AI, Tech, Products & Founder Notes",
    color: "group-hover:text-[#1da1f2]"
  },
  {
    id: 5,
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com",
    role: "General Media & Agency Connections",
    color: "group-hover:text-[#1877f2]"
  },
  {
    id: 6,
    name: "Behance",
    icon: FaBehance,
    url: "https://behance.net",
    role: "Design Systems & Case Studies",
    color: "group-hover:text-[#1769ff]"
  },
  {
    id: 7,
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com",
    role: "SaaS Repositories & Open Source",
    color: "group-hover:text-[#ffffff]"
  }
];

export default function SocialPresence() {
  return (
    <section
      id="social-presence-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-2deg]">
            14 — DIGITAL ECOSYSTEM
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Follow the journey
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            Different aspects of my design, engineering, and entrepreneurial work reside across different digital layers.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <Magnetic key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-6 bg-white rounded-[24px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 interactive-hover cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-xl md:text-2xl text-[#222222] uppercase tracking-tight">
                      {social.name}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F4F3EF] border-2 border-[#222222] flex items-center justify-center text-xl text-[#222222] group-hover:bg-[#FFD45C] transition-all duration-200 shadow-[2px_2px_0px_0px_#222222]">
                      <Icon />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase font-black tracking-wider text-[#555555] group-hover:text-[#DE4A82] transition-colors">
                      {social.name === "GitHub" ? "Source Code" : "Social Node"}
                    </span>
                    <p className="text-sm font-sans text-[#555555] leading-snug">
                      {social.role}
                    </p>
                  </div>
                </a>
              </Magnetic>
            );
          })}
        </div>

      </div>
    </section>
  );
}
