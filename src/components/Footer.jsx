import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';
import { Mail, Phone } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          {footerContent.taglines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>{footerContent.credential}</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 md:items-center">
          <a href={socialLinks.email} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            {personalInfo.emails.primary}
          </a>
          <a href={socialLinks.phone} className="hover:text-white transition-colors">
            {personalInfo.phone}
          </a>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            {/* GitHub */}
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {/* LinkedIn */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            {/* Email */}
            <a 
              href={socialLinks.email}
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            {/* Phone */}
            <a 
              href={socialLinks.phone}
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
