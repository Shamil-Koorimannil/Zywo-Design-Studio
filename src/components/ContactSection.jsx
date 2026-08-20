import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Magnetic from "./Magnetic";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate email submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-4xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[2deg]">
            15 — CONTACT FORM
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Let's build something meaningful
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            I'm open to collaborations, creative projects and ambitious ideas. Reach out below.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Meta Positioning (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-[20px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#DE4A82] block mb-1">Direct Communication</span>
              <p className="font-sans text-sm text-[#555555] leading-relaxed mb-4">
                Skip the forms? Drop me an email directly at:
              </p>
              <a 
                href="mailto:hello@rayanhany.com" 
                className="font-heading font-black text-lg text-[#222222] border-b-2 border-[#DE4A82] pb-0.5 hover:text-[#DE4A82] transition-colors duration-200"
              >
                hello@rayanhany.com
              </a>
            </div>

            <div className="text-xs uppercase tracking-widest font-black text-[#222222] bg-[#FFD45C] p-4 rounded-xl border-2 border-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222] text-center">
              Based in India &bull; Building globally
            </div>
          </div>

          {/* Right Block: Interactive Form (7 cols) */}
          <div className="md:col-span-7 bg-white p-8 md:p-10 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative text-left">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
                <span className="text-5xl">⚡</span>
                <h3 className="font-heading font-black text-2xl text-[#222222] uppercase">Message Received</h3>
                <p className="font-sans text-sm text-[#555555] max-w-xs">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-xs uppercase tracking-widest font-black text-[#222222]">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-4 bg-[#F4F3EF] text-[#222222] border-2 border-[#222222] rounded-xl focus:border-[#DE4A82] font-sans text-md transition-colors outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className="text-xs uppercase tracking-widest font-black text-[#222222]">
                    Your Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full p-4 bg-[#F4F3EF] text-[#222222] border-2 border-[#222222] rounded-xl focus:border-[#DE4A82] font-sans text-md transition-colors outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message-input" className="text-xs uppercase tracking-widest font-black text-[#222222]">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ideas or inquiry..."
                    className="w-full p-4 bg-[#F4F3EF] text-[#222222] border-2 border-[#222222] rounded-xl focus:border-[#DE4A82] font-sans text-md transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <Magnetic>
                    <button
                      type="submit"
                      className="group w-full md:w-auto flex items-center justify-center gap-4 py-4 px-8 text-md font-black bg-[#FFD45C] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out interactive-hover cursor-pointer"
                    >
                      <span>Send Message</span>
                      <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </Magnetic>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
