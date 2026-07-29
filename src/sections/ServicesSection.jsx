import React, { useRef } from "react";
import { FiLayers, FiBox, FiMap, FiMonitor } from "react-icons/fi";
import { gsap } from "gsap";

const SERVICES = [
  {
    id: 1,
    title: "Branding",
    icon: FiLayers,
    desc: "Memorable brand identities that establish presence and drive connection."
  },
  {
    id: 2,
    title: "Package Design",
    icon: FiBox,
    desc: "Stand-out packaging that commands attention and elevates unboxing."
  },
  {
    id: 3,
    title: "Outdoor Print",
    icon: FiMap,
    desc: "Impactful outdoor advertising and physical print layouts."
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: FiMonitor,
    desc: "Intuitive digital interfaces merging function with aesthetics."
  }
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  // Slight alternating random-like rotations matching project cards
  const initialRotation = index % 4 === 0 ? 1.5 : index % 4 === 1 ? -1.5 : index % 4 === 2 ? 1.2 : -1.0;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Normalize coordinates (-0.5 to 0.5)
    const xc = (x / width) - 0.5;
    const yc = (y / height) - 0.5;

    // Dynamic rotation relative to initial rotation, and translation based on cursor position
    gsap.to(card, {
      rotate: initialRotation + xc * 4, 
      x: xc * 12,
      y: yc * 12,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });

    // Subtly scale the icon/illustration container
    gsap.to(iconRef.current, {
      scale: 1.12,
      rotate: xc * 10,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Bounce back to normal state with initial rotation
    gsap.to(card, {
      rotate: initialRotation,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });

    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });
  };

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotate(${initialRotation}deg)` }}
      className="block bg-brand-white rounded-[24px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg transition-shadow duration-300 ease-out overflow-hidden interactive-hover"
    >
      {/* Icon/Abstract Illustration Container (matching Project thumbnail ratio) */}
      <div className="w-full aspect-[4/3] bg-brand-offwhite border-b-5 border-brand-black overflow-hidden relative flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-blue/10 group-hover:to-brand-purple/10 transition-colors duration-500">
        
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Large icon with primary theme coloring */}
        <div 
          ref={iconRef} 
          className="w-24 h-24 md:w-28 md:h-28 bg-brand-white rounded-2xl border-4 border-brand-black flex items-center justify-center text-brand-black shadow-[4px_4px_0px_0px_#111] group-hover:bg-brand-black group-hover:text-brand-white transition-colors duration-300 z-10"
        >
          <IconComponent className="text-4xl md:text-5xl" />
        </div>
      </div>

      {/* Info Block */}
      <div className="p-8 flex flex-col gap-2 bg-brand-white">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-brand-black">
          {service.title}
        </h3>
        <p className="text-md md:text-lg font-medium text-brand-black/60">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
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

      {/* Services Grid (alternating rotations, matching Projects layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto w-full mb-16 p-2">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Footer transition spacing */}
      <div className="h-4" />
    </section>
  );
}
