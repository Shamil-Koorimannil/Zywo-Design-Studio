import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaBehance, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FiMail, FiX } from "react-icons/fi";
import Magnetic from "./Magnetic";

const SOCIALS = [
  { id: 1, icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  { id: 2, icon: FaBehance, url: "https://behance.net", label: "Behance" },
  { id: 3, icon: FaPinterest, url: "https://pinterest.com", label: "Pinterest" },
  { id: 4, icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  { id: 5, icon: FiMail, url: "mailto:hello@zywo.studio", label: "Email" }
];

export default function ConnectPopup({ isOpen, setIsOpen }) {
  const popupRef = useRef(null);

  // Close when clicking outside the popup area
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target) && !e.target.closest("#footer-connect-btn")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, setIsOpen]);

  // Radius for radial expansion
  const radius = 130; // pixels

  // Define radial coordinates (quarter-circle from 180 to 270 degrees)
  const getCoordinates = (index, total) => {
    // Distribute angles between 180 and 270 degrees
    const startAngle = 180 * (Math.PI / 180);
    const endAngle = 270 * (Math.PI / 180);
    const angleStep = (endAngle - startAngle) / (total - 1);
    const angle = startAngle + index * angleStep;

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  };

  return (
    <div ref={popupRef} className="fixed bottom-8 right-8 z-[100] select-none">
      {/* Radial Social Icons Container */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
            {SOCIALS.map((social, index) => {
              const { x, y } = getCoordinates(index, SOCIALS.length);
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ x: 0, y: 0, scale: 0, rotate: -45 }}
                  animate={{
                    x: x,
                    y: y,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                      delay: index * 0.05
                    }
                  }}
                  exit={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    rotate: 45,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                      delay: (SOCIALS.length - 1 - index) * 0.03
                    }
                  }}
                  onClick={() => setIsOpen(false)}
                  className="absolute w-14 h-14 bg-brand-white text-brand-black border-4 border-brand-black rounded-[12px] brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-1 flex items-center justify-center text-2xl -translate-x-1/2 -translate-y-1/2 hover:bg-brand-black hover:text-brand-white transition-colors duration-200 interactive-hover"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main floating action button */}
      <Magnetic>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label={isOpen ? "Close connections menu" : "Open connections menu"}
          className="relative group flex items-center justify-center w-16 h-16 bg-brand-white text-brand-black rounded-full brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1 transition-all duration-300 interactive-hover"
        >
          {/* Morphing icon/text container */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-black"
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.span
                key="connect-text"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-black uppercase tracking-wider group-hover:scale-110 transition-transform duration-200"
              >
                CNCT
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Magnetic>
    </div>
  );
}
