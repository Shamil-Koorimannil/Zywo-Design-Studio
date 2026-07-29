import React, { useEffect, useRef } from "react";
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
      if (
        popupRef.current && 
        !popupRef.current.contains(e.target) && 
        !e.target.closest("#footer-connect-btn")
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/50 backdrop-blur-xs select-none">
          {/* Spring-animated Neo Brutalist Card */}
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.4, rotate: -5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 280,
                damping: 20
              }
            }}
            exit={{ 
              scale: 0.4, 
              rotate: 5, 
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            className="w-[90vw] max-w-md bg-brand-white p-8 rounded-[28px] brutalist-border brutalist-shadow-lg relative"
          >
            {/* Close Circle Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 border-3 border-brand-black rounded-full flex items-center justify-center bg-brand-white text-brand-black hover:bg-brand-black hover:text-brand-white hover:-translate-y-0.5 transition-all duration-200 interactive-hover"
              aria-label="Close connection panel"
            >
              <FiX className="text-xl" />
            </button>

            {/* Header Title */}
            <h3 className="font-heading font-black text-3xl text-brand-black mb-6 mt-2 text-center uppercase tracking-tight">
              Connect With Us
            </h3>

            {/* Social List */}
            <div className="flex flex-col gap-4">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <Magnetic key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        // Close automatically after selecting a platform
                        setTimeout(() => setIsOpen(false), 250);
                      }}
                      className="group flex items-center justify-between p-4 bg-brand-white border-3 border-brand-black rounded-xl brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-1 hover:bg-brand-black hover:text-brand-white transition-all duration-200 interactive-hover"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-offwhite border-2 border-brand-black text-brand-black flex items-center justify-center text-xl group-hover:bg-brand-white group-hover:text-brand-black transition-colors duration-200">
                          <Icon />
                        </div>
                        <span className="font-sans font-black text-lg md:text-xl">
                          {social.label}
                        </span>
                      </div>
                      <span className="text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest">
                        Open &rarr;
                      </span>
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
