import React from "react";
import { FiArrowDown, FiLayers, FiBox, FiMap, FiMonitor, FiPlay } from "react-icons/fi";
import Magnetic from "../components/Magnetic";

const SERVICES = [
  {
    id: 1,
    title: "Branding",
    icon: FiLayers,
    desc: "Building memorable, distinct brand identities that establish presence and drive connection.",
    rotation: "rotate-2"
  },
  {
    id: 2,
    title: "Package Design",
    icon: FiBox,
    desc: "Creating stand-out packaging that commands attention on shelves and elevates the unboxing experience.",
    rotation: "-rotate-2"
  },
  {
    id: 3,
    title: "Outdoor Print Design",
    icon: FiMap,
    desc: "Designing impactful outdoor advertising and physical print layouts that leave a lasting impression.",
    rotation: "rotate-1"
  },
  {
    id: 4,
    title: "UI / UX Design",
    icon: FiMonitor,
    desc: "Crafting intuitive, user-centered digital interfaces that merge flawless functionality with modern aesthetics.",
    rotation: "-rotate-1"
  },
  {
    id: 5,
    title: "Motion Design",
    icon: FiPlay,
    desc: "Producing dynamic motion graphics and animations that bring brand storytelling to life.",
    rotation: "rotate-2"
  }
];

export default function ServicesSection({ onScrollToContact }) {
  return (
    <section
      id="services-section"
      className="relative w-full min-h-screen bg-brand-offwhite py-24 px-8 md:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Header - minimal */}
      <div className="mb-16">
        <div className="inline-block px-6 py-2 bg-brand-black text-brand-white text-sm font-black uppercase tracking-wider rounded-md brutalist-shadow-sm border-2 border-brand-black rotate-[2deg]">
          Our Expertise
        </div>
      </div>

      {/* Services List - Horizontal Oversized Blocks */}
      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full max-h-[58vh] overflow-y-auto pr-3 mb-12 brutalist-scrollbar p-2">
        {SERVICES.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`transform transition-all duration-300 ease-out hover:rotate-0 hover:-translate-y-2 group p-[5px] bg-brand-black hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple rounded-[24px] brutalist-shadow hover:brutalist-shadow-lg interactive-hover ${service.rotation}`}
            >
              {/* Inner card container */}
              <div className="w-full bg-brand-white rounded-[19px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                {/* Icon Box */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-offwhite rounded-[16px] border-4 border-brand-black flex items-center justify-center text-brand-black group-hover:bg-brand-black group-hover:text-brand-white transition-colors duration-300 shrink-0">
                  <IconComponent className="text-3xl md:text-4xl" />
                </div>
                
                {/* Title & Description */}
                <div className="flex-grow text-left">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-brand-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-md md:text-lg font-medium text-brand-black/70">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Right: Contact Navigation Button */}
      <div className="self-end z-50">
        <Magnetic>
          <button
            onClick={onScrollToContact}
            id="btn-goto-contact"
            aria-label="Scroll down to contact"
            className="group flex items-center gap-6 py-4 pl-8 pr-4 text-xl md:text-2xl font-black bg-brand-white text-brand-black rounded-[24px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out"
          >
            <span>Contact</span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-white rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 ease-in-out">
              <FiArrowDown className="text-xl md:text-2xl" />
            </div>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
