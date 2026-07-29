import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";
import CustomCursor from "./components/CustomCursor";
import ConnectPopup from "./components/ConnectPopup";

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
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for heavy organic physics
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

    // 2. Build the GSAP ScrollTrigger Drag Timeline
    const ctx = gsap.context(() => {
      const sections = [
        section1Ref.current,
        section2Ref.current,
        section3Ref.current,
        section4Ref.current
      ];

      // Create a master timeline linked to scroll pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 3 full transitions
          scrub: 1.2, // adds physics-like inertia to the drag
          pin: true,
          anticipatePin: 1,
        }
      });

      // Drag transitions: Active section translates up -100% to reveal the section below
      tl.to(section1Ref.current, {
        yPercent: -100,
        ease: "none",
      })
      .to(section2Ref.current, {
        yPercent: -100,
        ease: "none",
      })
      .to(section3Ref.current, {
        yPercent: -100,
        ease: "none",
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

  // Smooth navigation helper
  const scrollToSection = (sectionIndex) => {
    if (!lenisRef.current) return;
    
    // Total height is scrollable height which matches 3 transitions (3 * innerHeight)
    const targetScroll = sectionIndex * window.innerHeight;
    
    lenisRef.current.scrollTo(targetScroll, {
      duration: 1.8,
      force: true,
      ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <>
      {/* Dynamic Custom Cursor */}
      <CustomCursor />

      {/* Main Multi-Section Scroll Container */}
      <div 
        ref={containerRef} 
        className="relative w-full h-screen overflow-hidden select-none bg-brand-black"
      >
        {/* Section 1: Hero */}
        <div 
          ref={section1Ref} 
          className="absolute inset-0 w-full h-full z-40 section-container"
        >
          <HeroSection onScrollToProjects={() => scrollToSection(1)} />
        </div>

        {/* Section 2: Projects */}
        <div 
          ref={section2Ref} 
          className="absolute inset-0 w-full h-full z-30 section-container"
        >
          <ProjectsSection onScrollToServices={() => scrollToSection(2)} />
        </div>

        {/* Section 3: Services */}
        <div 
          ref={section3Ref} 
          className="absolute inset-0 w-full h-full z-20 section-container"
        >
          <ServicesSection onScrollToContact={() => scrollToSection(3)} />
        </div>

        {/* Section 4: Contact & Footer */}
        <div 
          ref={section4Ref} 
          className="absolute inset-0 w-full h-full z-10 section-container"
        >
          <ContactSection onConnectClick={() => setIsConnectOpen(true)} />
        </div>
      </div>

      {/* Floating Radial Connect Menu */}
      <ConnectPopup isOpen={isConnectOpen} setIsOpen={setIsConnectOpen} />
    </>
  );
}
