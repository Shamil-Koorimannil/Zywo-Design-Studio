import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projectsData } from "../data/projects";

function ProjectCard({ project }) {
  const getTagColor = (idx) => {
    const colors = ["bg-[#8FA4D8]", "bg-[#FFD45C]", "bg-[#DE4A82]", "bg-[#319C97]", "bg-[#8A63D2]"];
    return colors[idx % colors.length];
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border-[3px] border-[#222222] rounded-[24px] shadow-[6px_6px_0px_0px_#222222] hover:shadow-[10px_10px_0px_0px_#222222] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-200 select-none overflow-hidden h-full flex flex-col justify-between"
    >
      <div>
        {/* Visual Preview */}
        <div className="w-full aspect-[16/10] overflow-hidden border-b-[3px] border-[#222222] relative bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-102 group-hover:scale-104 transition-transform duration-500 ease-out"
          />
          {/* Subtle light overlay */}
          <div className="absolute inset-0 bg-[#222222]/5 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8 flex flex-col gap-3 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-black text-[#8A63D2]">
              {project.brand}
            </span>
            <span className="text-[10px] text-[#555555] font-black">•</span>
            <span className="text-[10px] uppercase font-black tracking-wider text-[#555555]">
              Role: {project.role}
            </span>
          </div>
          
          <h3 className="font-heading font-black text-2xl md:text-3xl text-[#222222] uppercase tracking-tight leading-none group-hover:text-[#DE4A82] transition-colors">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={`text-[9px] uppercase font-black tracking-wider px-2.5 py-1 text-[#222222] border-2 border-[#222222] rounded-md shadow-[1.5px_1.5px_0px_0px_#222222] ${getTagColor(idx)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Explore indication */}
      <div className="p-6 md:p-8 pt-0 flex justify-between items-center border-t border-[#222222]/10 mt-auto">
        <span className="text-xs font-black uppercase tracking-widest text-[#222222]">
          Launch Case Study
        </span>
        <div className="w-10 h-10 bg-[#FFD45C] border-2 border-[#222222] rounded-full flex items-center justify-center text-lg text-[#222222] shadow-[2px_2px_0px_0px_#222222] group-hover:bg-[#DE4A82] group-hover:text-white transition-all duration-200">
          <FiArrowUpRight />
        </div>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects-section"
      className="relative w-full bg-white py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#FFD45C] text-[#222222] text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[1.5deg]">
            09 — PORTFOLIO CASE STUDIES
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Selected Work
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            A curated list of design, strategy, and engineering projects demonstrating creative brand building and technical execution.
          </p>
        </div>

        {/* Selected Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
