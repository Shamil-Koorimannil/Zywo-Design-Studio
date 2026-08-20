import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaBehance, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail, FiX } from "react-icons/fi";
import Magnetic from "./Magnetic";

const SOCIALS = [
  { id: 1, icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  { id: 2, icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  { id: 3, icon: FaTwitter, url: "https://twitter.com", label: "X" },
  { id: 4, icon: FaBehance, url: "https://behance.net", label: "Behance" },
  { id: 5, icon: FaGithub, url: "https://github.com", label: "GitHub" },
  { id: 6, icon: FiMail, url: "mailto:hello@rayanhany.com", label: "Email" }
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
        !e.target.closest("#footer-connect-btn") &&
        !e.target.closest("button")
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#222222]/50 backdrop-blur-xs select-none">
          {/* Spring-animated Neo Brutalist Card */}
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: {
                duration: 0.25,
                ease: "easeOut"
              }
            }}
            exit={{ 
              scale: 0.95, 
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            className="w-[90vw] max-w-md bg-[#F4F3EF] p-8 rounded-[24px] border-[3px] border-[#222222] shadow-[8px_8px_0px_0px_#222222] relative"
          >
            {/* Close Circle Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 border-2 border-[#222222] rounded-xl flex items-center justify-center bg-white text-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222] hover:bg-[#FFD45C] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
              aria-label="Close connection panel"
            >
              <FiX className="text-xl" />
            </button>

            {/* Header Title */}
            <h3 className="font-heading font-black text-3xl text-[#222222] mb-6 mt-2 text-center uppercase tracking-tight">
              Let's Connect
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
                      className="group flex items-center justify-between p-4 bg-white border-2 border-[#222222] rounded-xl shadow-[3px_3px_0px_0px_#222222] hover:shadow-[4.5px_4.5px_0px_0px_#222222] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#F4F3EF] border-2 border-[#222222] text-[#222222] flex items-center justify-center text-xl group-hover:bg-[#FFD45C] transition-colors duration-200">
                          <Icon />
                        </div>
                        <span className="font-sans font-black text-lg text-[#222222] transition-colors duration-200">
                          {social.label}
                        </span>
                      </div>
                      <span className="text-sm font-black text-[#DE4A82] opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest">
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

