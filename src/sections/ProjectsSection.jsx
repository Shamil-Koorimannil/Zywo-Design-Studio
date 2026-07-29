import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import { gsap } from "gsap";
import Magnetic from "../components/Magnetic";

const PROJECTS = [
  {
    id: 1,
    client: "Elysian Organic Tea",
    type: "Branding & Packaging",
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net"
  },
  {
    id: 2,
    client: "Kalon Cosmetics",
    type: "Visual Identity & Print",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net"
  },
  {
    id: 3,
    client: "Vesper Mobile App",
    type: "UI/UX & Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net"
  },
  {
    id: 4,
    client: "Aether Motion Lab",
    type: "3D Animation & Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://www.behance.net"
  }
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Normalize coordinates (-0.5 to 0.5)
    const xc = (x / width) - 0.5;
    const yc = (y / height) - 0.5;

    // Dynamic rotation and minor translation based on cursor position
    gsap.to(card, {
      rotate: xc * 4, // slight rotation up to 2 degrees
      x: xc * 12,
      y: yc * 12,
      scale: 1.01,
      duration: 0.3,
      ease: "power2.out"
    });

    // Subtly scale the thumbnail image
    gsap.to(imgRef.current, {
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Bounce back to normal state
    gsap.to(card, {
      rotate: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="block bg-brand-white rounded-[24px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg transition-shadow duration-300 ease-out overflow-hidden interactive-hover"
    >
      {/* Thumbnail Container */}
      <div className="w-full aspect-[4/3] bg-brand-offwhite border-b-5 border-brand-black overflow-hidden relative">
        <img
          ref={imgRef}
          src={project.image}
          alt={project.client}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
      </div>

      {/* Info Block */}
      <div className="p-8 flex flex-col gap-2 bg-brand-white">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-brand-black">
          {project.client}
        </h3>
        <p className="text-md md:text-lg font-medium text-brand-black/60">
          {project.type}
        </p>
      </div>
    </a>
  );
}

export default function ProjectsSection({ onScrollToServices }) {
  return (
    <section
      id="projects-section"
      className="relative w-full min-h-screen bg-brand-white py-24 px-8 md:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Header - minimal */}
      <div className="mb-16">
        <div className="inline-block px-6 py-2 bg-brand-black text-brand-white text-sm font-black uppercase tracking-wider rounded-md brutalist-shadow-sm border-2 border-brand-black rotate-[-2deg]">
          Selected Projects
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto w-full max-h-[58vh] overflow-y-auto pr-3 mb-12 brutalist-scrollbar p-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Left: Services Navigation Button */}
      <div className="self-start z-50">
        <Magnetic>
          <button
            onClick={onScrollToServices}
            id="btn-goto-services"
            aria-label="Scroll down to services"
            className="group flex items-center gap-6 py-4 pl-4 pr-8 text-xl md:text-2xl font-black bg-brand-white text-brand-black rounded-[24px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-white rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 ease-in-out">
              <FiArrowDown className="text-xl md:text-2xl" />
            </div>
            <span>Services</span>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
