import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { insightsData, insightCategories } from "../data/insights";

export default function InsightsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInsights = selectedCategory === "All"
    ? insightsData
    : insightsData.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="insights-section"
      className="relative w-full bg-white py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#FFD45C] text-[#222222] text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[1deg]">
            11 — INSIGHTS & BLOG
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Ideas I'm exploring
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            Writing at the intersection of branding, advertising, AI, technology, entrepreneurship, and product building.
          </p>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-3 items-center border-b border-[#222222]/10 pb-8">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              selectedCategory === "All"
                ? "bg-[#FFD45C] text-[#222222] border-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222]"
                : "bg-white text-[#555555] border-[#222222]/20 hover:bg-[#F4F3EF]"
            }`}
          >
            All Categories
          </button>
          {insightCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#FFD45C] text-[#222222] border-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222]"
                  : "bg-white text-[#555555] border-[#222222]/20 hover:bg-[#F4F3EF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredInsights.map((insight) => (
            <article
              key={insight.id}
              className="bg-[#F4F3EF] rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] hover:shadow-[10px_10px_0px_0px_#222222] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4 text-left">
                {/* Meta details */}
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-[#8A63D2]">
                  <span>{insight.category}</span>
                  <span className="text-[#555555] font-medium">{insight.date}</span>
                </div>
                
                <h3 className="font-heading font-black text-xl md:text-2xl text-[#222222] uppercase tracking-tight leading-snug">
                  {insight.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-[#555555] leading-relaxed">
                  {insight.summary}
                </p>
              </div>

              {/* Bottom tag list & read-more */}
              <div className="flex justify-between items-center border-t border-[#222222]/10 pt-6 mt-2">
                <div className="flex gap-2">
                  {insight.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-black bg-[#8FA4D8]/20 border border-[#222222]/20 px-2 py-0.5 rounded-lg text-[#222222]">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`#insight-${insight.id}`}
                  className="group flex items-center gap-2 font-heading font-black uppercase text-xs tracking-wider text-[#222222] border-b-2 border-[#DE4A82] pb-0.5 hover:text-[#DE4A82] transition-colors duration-200 cursor-pointer"
                >
                  <span>Read Article</span>
                  <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
