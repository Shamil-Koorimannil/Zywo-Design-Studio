import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import WaveFooter from "./components/WaveFooter";
import CustomCursor from "./components/CustomCursor";
import ConnectPopup from "./components/ConnectPopup";

import zywoLogo from "./assets/Zywo logo Design studio.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  
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

    // 2. Build the GSAP ScrollTrigger stacked paper transition
    const ctx = gsap.context(() => {
      // Flowing stacked paper animation helper
      const animateSection = (el) => {
        if (!el) return;
        gsap.fromTo(el,
          {
            y: 80,
            scale: 0.98,
            opacity: 0.95,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom", // Starts when top of section enters viewport bottom
              end: "top top",      // Completes when top of section reaches viewport top
              scrub: true,         // scrub linking to scroll
            }
          }
        );
      };

      // Animate the subsequent sections as they enter the screen
      animateSection(section2Ref.current);
      animateSection(section3Ref.current);
      animateSection(section4Ref.current);
      
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

  // Smooth navigation helper using Lenis scrollTo
  const scrollToSection = (sectionIndex) => {
    if (!lenisRef.current) return;
    
    let target = null;
    if (sectionIndex === 1) target = section2Ref.current;
    if (sectionIndex === 2) target = section3Ref.current;
    
    if (target) {
      lenisRef.current.scrollTo(target, {
        duration: 1.4,
        offset: 0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <>
      {/* Dynamic Custom Cursor */}
      <CustomCursor />

      {/* Premium Floating Header */}
      <header className="fixed top-6 left-6 z-50 md:top-8 md:left-8">
        <div className="flex items-center gap-4 bg-brand-white/85 backdrop-blur-md px-4 py-3 rounded-2xl brutalist-border brutalist-shadow-sm interactive-hover">
          <img 
            src={zywoLogo} 
            alt="Zywo Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-xl border-2 border-brand-black"
          />
          <span className="font-heading font-black tracking-tight text-brand-black text-lg md:text-xl">
            Zywo Design Studio
          </span>
        </div>
      </header>

      {/* Main Multi-Section Scroll Container */}
      <div 
        ref={containerRef} 
        className="relative w-full select-none bg-brand-offwhite"
      >
        {/* Section 1: Hero */}
        <div 
          ref={section1Ref} 
          className="relative w-full z-10"
        >
          <HeroSection onScrollToProjects={() => scrollToSection(1)} />
        </div>

        {/* Section 2: Projects */}
        <div 
          ref={section2Ref} 
          className="relative w-full z-20 section-container"
        >
          <ProjectsSection onScrollToServices={() => scrollToSection(2)} />
        </div>

        {/* Section 3: Services */}
        <div 
          ref={section3Ref} 
          className="relative w-full z-30 section-container"
        >
          <ServicesSection />
        </div>

        {/* Section 4: Footer */}
        <div 
          ref={section4Ref} 
          className="relative w-full z-40 section-container"
        >
          <WaveFooter onConnectClick={() => setIsConnectOpen(true)} />
        </div>
      </div>

      {/* Floating Radial Connect Menu */}
      <ConnectPopup isOpen={isConnectOpen} setIsOpen={setIsConnectOpen} />
    </>
  );
}
