import React from "react";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import WaveFooter from "../components/WaveFooter";
import Magnetic from "../components/Magnetic";

export default function ContactSection({ onConnectClick }) {
  return (
    <section
      id="contact-section"
      className="relative w-full min-h-screen flex flex-col justify-between bg-gradient-to-tr from-brand-offwhite via-[#ebf2fe] to-brand-white pt-24 select-none"
    >
      {/* Centered Large Brutalist Contact Block */}
      <div className="flex-grow flex items-center justify-center px-8 md:px-16 py-12">
        <div className="max-w-3xl w-full bg-brand-white rounded-[24px] brutalist-border brutalist-shadow p-8 md:p-16 text-center transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-black mb-8 leading-none">
            Start your next project.
          </h2>

          {/* Email & Phone */}
          <div className="flex flex-col gap-6 mb-12">
            <a
              href="mailto:hello@zywo.studio"
              className="group inline-flex items-center justify-center gap-3 text-2xl md:text-3xl font-black text-brand-black hover:text-brand-blue transition-colors duration-300 underline underline-offset-8 decoration-4 decoration-brand-black hover:decoration-brand-blue interactive-hover"
            >
              <FiMail className="text-2xl" />
              <span>hello@zywo.studio</span>
            </a>
            
            <a
              href="tel:+15550192830"
              className="inline-flex items-center justify-center gap-3 text-xl md:text-2xl font-bold text-brand-black/70 hover:text-brand-black transition-colors duration-300 interactive-hover"
            >
              <FiPhone />
              <span>+1 (555) 019-2830</span>
            </a>
          </div>

          {/* Book a Call Button */}
          <div className="flex justify-center">
            <Magnetic>
              <button
                onClick={() => window.open("https://calendly.com", "_blank")}
                id="btn-book-call"
                className="group flex items-center gap-4 py-4 px-10 text-xl font-black bg-brand-black text-brand-white rounded-[20px] brutalist-border brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out interactive-hover"
              >
                <span>Book a Call</span>
                <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Unique Wave Footer */}
      <WaveFooter onConnectClick={onConnectClick} />
    </section>
  );
}
