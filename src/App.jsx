import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Components flat layout
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import WhatIBuildSection from "./components/WhatIBuildSection";
import JourneySection from "./components/JourneySection";
import TharaSection from "./components/TharaSection";
import CreativeDirectionSection from "./components/CreativeDirectionSection";
import ZywoSection from "./components/ZywoSection";
import FluxifySection from "./components/FluxifySection";
import FluxiflowSection from "./components/FluxiflowSection";
import ProjectsSection from "./components/ProjectsSection";
import MindsetSection from "./components/MindsetSection";
import InsightsSection from "./components/InsightsSection";
import FounderSection from "./components/FounderSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SocialPresence from "./components/SocialPresence";
import ContactSection from "./components/ContactSection";
import WaveFooter from "./components/WaveFooter";
import CustomCursor from "./components/CustomCursor";
import ConnectPopup from "./components/ConnectPopup";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  
  // Section refs for target scrolling
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whatIBuildRef = useRef(null);
  const journeyRef = useRef(null);
  const tharaRef = useRef(null);
  const creativeDirectionRef = useRef(null);
  const zywoRef = useRef(null);
  const fluxifyRef = useRef(null);
  const fluxiflowRef = useRef(null);
  const projectsRef = useRef(null);
  const mindsetRef = useRef(null);
  const insightsRef = useRef(null);
  const founderRef = useRef(null);
  const testimonialsRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const lenisRef = useRef(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Restrained animations context
    const ctx = gsap.context(() => {
      const sections = [
        introRef, whatIBuildRef, journeyRef, tharaRef, 
        creativeDirectionRef, zywoRef, fluxifyRef, fluxiflowRef, 
        projectsRef, mindsetRef, insightsRef, founderRef, 
        testimonialsRef, socialRef, contactRef
      ];

      // Fade-in titles
      sections.forEach((ref) => {
        if (!ref.current) return;
        const heading = ref.current.querySelector("h2");
        const eyebrow = ref.current.querySelector("div.inline-block");
        
        if (heading && eyebrow) {
          gsap.fromTo([eyebrow, heading], 
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        // Apply an extremely subtle scroll-linked transform to the inner container
        // ensuring it is nearly imperceptible and never interferes with direct scroll control.
        const inner = ref.current.querySelector("div.max-w-5xl, div.max-w-6xl, div.max-w-4xl");
        if (inner) {
          gsap.fromTo(inner,
            { y: 15 },
            {
              y: -15,
              ease: "none",
              scrollTrigger: {
                trigger: ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        }
      });
    }, containerRef);

    // Clean up
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  // Smooth scroll to ref target
  const scrollTo = (ref) => {
    if (!lenisRef.current || !ref.current) return;
    lenisRef.current.scrollTo(ref.current, {
      duration: 1.2,
      offset: 0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main outer layout with warm cream background */}
      <div 
        ref={containerRef}
        className="min-h-screen w-full bg-[#F3E8D9] py-8 px-4 md:py-16 md:px-12 relative flex justify-center items-start overflow-x-hidden"
      >
        
        {/* Floating stickers absolute positioned relative to outer wrapper */}
        {/* Design System Sticker */}
        <div className="absolute top-[40px] left-[10%] md:left-[22%] z-20 rotate-[-8deg] bg-[#8FA4D8] border-[3px] border-[#222222] px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_#222222] flex items-center gap-2 select-none hover:scale-105 transition-transform duration-150">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD45C] border border-[#222222]" />
          <span className="font-heading font-black text-xs text-[#222222] uppercase tracking-wider">Design System</span>
        </div>

        {/* Name Pill Sticker */}
        <div className="absolute top-[45px] right-[8%] md:right-[15%] z-20 rotate-[6deg] bg-[#FFD45C] border-[3px] border-[#222222] px-6 py-2 rounded-full shadow-[5px_5px_0px_0px_#222222] select-none hover:scale-105 transition-transform duration-150">
          <span className="font-heading font-black text-sm text-[#222222] uppercase tracking-widest">Rayan Hany</span>
        </div>

        {/* Teal Semicircle Sticker */}
        <div className="absolute top-[350px] left-[2%] md:left-[4%] z-20 rotate-[15deg] w-14 h-14 bg-[#319C97] border-[3px] border-[#222222] rounded-t-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Pink Dribbble Ball Sticker */}
        <div className="absolute top-[800px] left-[1%] md:left-[3%] z-20 rotate-[-20deg] w-14 h-14 bg-[#DE4A82] border-[3px] border-[#222222] rounded-full shadow-[5px_5px_0px_0px_#222222] flex items-center justify-center select-none hover:scale-110 transition-transform duration-150 hidden lg:block">
          <div className="w-full h-0.5 bg-[#222222]" />
        </div>

        {/* Purple Crescent Sticker */}
        <div className="absolute bottom-[400px] left-[2%] md:left-[4%] z-20 rotate-[45deg] w-12 h-12 bg-[#8A63D2] border-[3px] border-[#222222] rounded-tr-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Pink Semicircle Sticker */}
        <div className="absolute top-[600px] right-[2%] md:right-[4%] z-20 rotate-[-45deg] w-14 h-14 bg-[#DE4A82] border-[3px] border-[#222222] rounded-b-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Yellow Quarter-Circle Sticker */}
        <div className="absolute bottom-[250px] right-[2%] md:right-[4%] z-20 rotate-[30deg] w-12 h-12 bg-[#FFD45C] border-[3px] border-[#222222] rounded-bl-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Blue Arrow Pointer Sticker */}
        <div className="absolute top-[180px] right-[6%] md:right-[10%] z-20 rotate-[-15deg] text-3xl select-none hover:scale-115 transition-transform duration-150 text-[#8FA4D8] hidden lg:block">
          <svg className="w-10 h-10 drop-shadow-[3px_3px_0px_#222222]" viewBox="0 0 24 24" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        </div>

        {/* Large Central Canvas Frame */}
        <div className="w-full max-w-5xl bg-[#F4F3EF] border-[3px] border-[#222222] rounded-[32px] shadow-[12px_12px_0px_0px_#222222] relative flex flex-col z-10 mt-12 overflow-hidden">
          
          {/* Custom Header Navigation */}
          <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center border-b-[3px] border-[#222222] bg-[#F4F3EF]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FFD45C] border-2 border-[#222222] flex items-center justify-center font-heading font-black text-md text-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222]">
                RH
              </div>
              <span className="font-heading font-black text-lg text-[#222222] tracking-tight">
                rayan.digital
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo(introRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#8A63D2] transition-colors cursor-pointer interactive-hover">About</button>
              <button onClick={() => scrollTo(journeyRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#319C97] transition-colors cursor-pointer interactive-hover">Journey</button>
              <button onClick={() => scrollTo(projectsRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#DE4A82] transition-colors cursor-pointer interactive-hover">Projects</button>
              <button onClick={() => scrollTo(whatIBuildRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#8FA4D8] transition-colors cursor-pointer interactive-hover">Capabilities</button>
              <button onClick={() => scrollTo(insightsRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#52B879] transition-colors cursor-pointer interactive-hover">Insights</button>
              <button onClick={() => scrollTo(contactRef)} className="font-heading font-bold text-sm text-[#222222] hover:text-[#8A63D2] transition-colors cursor-pointer interactive-hover">Contact</button>
            </nav>
          </header>

          {/* Section 01: Hero */}
          <div ref={heroRef} className="relative w-full z-10">
            <HeroSection 
              onScrollToWork={() => scrollTo(projectsRef)} 
              onConnectClick={() => setIsConnectOpen(true)} 
            />
          </div>

          {/* Section 02: Introduction */}
          <div ref={introRef} className="relative w-full z-10">
            <IntroductionSection />
          </div>

          {/* Section 03: What I Build */}
          <div ref={whatIBuildRef} className="relative w-full z-10">
            <WhatIBuildSection />
          </div>

          {/* Section 04: The Journey */}
          <div ref={journeyRef} className="relative w-full z-10">
            <JourneySection />
          </div>

          {/* Section 05: Thara Group */}
          <div ref={tharaRef} className="relative w-full z-10">
            <TharaSection />
          </div>

          {/* Section 06: Creative Direction */}
          <div ref={creativeDirectionRef} className="relative w-full z-10">
            <CreativeDirectionSection onScrollToZywo={() => scrollTo(zywoRef)} />
          </div>

          {/* Section 07: Zywo */}
          <div ref={zywoRef} className="relative w-full z-10">
            <ZywoSection />
          </div>

          {/* Section 08: Fluxify */}
          <div ref={fluxifyRef} className="relative w-full z-10">
            <FluxifySection />
          </div>

          {/* Section 09: Fluxiflow */}
          <div ref={fluxiflowRef} className="relative w-full z-10">
            <FluxiflowSection />
          </div>

          {/* Section 10: Selected Work */}
          <div ref={projectsRef} className="relative w-full z-10">
            <ProjectsSection />
          </div>

          {/* Section 11: How I Think */}
          <div ref={mindsetRef} className="relative w-full z-10">
            <MindsetSection />
          </div>

          {/* Section 12: Insights */}
          <div ref={insightsRef} className="relative w-full z-10">
            <InsightsSection />
          </div>

          {/* Section 13: Founder */}
          <div ref={founderRef} className="relative w-full z-10">
            <FounderSection />
          </div>

          {/* Section 14: Testimonials */}
          <div ref={testimonialsRef} className="relative w-full z-10">
            <TestimonialsSection />
          </div>

          {/* Section 15: Social Presence */}
          <div ref={socialRef} className="relative w-full z-10">
            <SocialPresence />
          </div>

          {/* Section 16: Contact Form */}
          <div ref={contactRef} className="relative w-full z-10">
            <ContactSection />
          </div>

          {/* Section 17: Footer */}
          <div ref={footerRef} className="relative w-full z-20">
            <WaveFooter onConnectClick={() => setIsConnectOpen(true)} />
          </div>
        </div>

      </div>

      {/* Fixed Connect Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40">
        <button
          onClick={() => setIsConnectOpen(true)}
          className="group flex items-center justify-center gap-2 py-3 px-6 bg-[#8FA4D8] text-[#222222] border-[3px] border-[#222222] rounded-full shadow-[5px_5px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 font-heading font-black uppercase text-xs md:text-sm tracking-wider cursor-pointer interactive-hover"
        >
          <span>Connect</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
        </button>
      </div>

      {/* Radial Connect Modal Popup */}
      <ConnectPopup isOpen={isConnectOpen} setIsOpen={setIsConnectOpen} />
    </>
  );
}
