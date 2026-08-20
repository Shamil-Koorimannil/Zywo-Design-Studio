import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    // Hide standard cursor on desktops
    const ctx = gsap.context(() => {
      // Set quick setters for performance
      const innerX = gsap.quickSetter(innerRef.current, "x", "px");
      const innerY = gsap.quickSetter(innerRef.current, "y", "px");
      
      const mouse = { x: 0, y: 0 };
      
      const onMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        innerX(mouse.x);
        innerY(mouse.y);
      };

      // Outer cursor moves with lag using GSAP ticker
      const onTick = () => {
        gsap.to(outerRef.current, {
          x: mouse.x,
          y: mouse.y,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      gsap.ticker.add(onTick);

      // Hover interactions
      const handleMouseEnter = () => {
        gsap.to(outerRef.current, { 
          scale: 1.6, 
          backgroundColor: "rgba(34, 34, 34, 0.08)",
          borderColor: "#222222",
          duration: 0.2 
        });
        gsap.to(innerRef.current, { 
          scale: 0.5, 
          backgroundColor: "#222222",
          duration: 0.2 
        });
      };

      const handleMouseLeave = () => {
        gsap.to(outerRef.current, { 
          scale: 1, 
          backgroundColor: "transparent",
          borderColor: "#222222",
          duration: 0.2 
        });
        gsap.to(innerRef.current, { 
          scale: 1, 
          backgroundColor: "#222222",
          duration: 0.2 
        });
      };

      const attachHoverListeners = () => {
        const elements = document.querySelectorAll("a, button, [role='button'], .interactive-hover");
        elements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
          el.addEventListener("mouseenter", handleMouseEnter);
          el.addEventListener("mouseleave", handleMouseLeave);
        });
      };

      attachHoverListeners();

      // Set up a MutationObserver to watch for DOM additions
      const observer = new MutationObserver(() => {
        attachHoverListeners();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        gsap.ticker.remove(onTick);
        observer.disconnect();
        const elements = document.querySelectorAll("a, button, [role='button'], .interactive-hover");
        elements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Inner charcoal circle */}
      <div
        ref={innerRef}
        id="cursor-inner"
        className="fixed top-0 left-0 w-2 h-2 bg-[#222222] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      {/* Outer charcoal ring */}
      <div
        ref={outerRef}
        id="cursor-outer"
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#222222] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
