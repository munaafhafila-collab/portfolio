"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#070b16] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#06B6D4] p-0.5">
                <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center font-bold text-white text-xs">
                  AH
                </div>
              </div>
              <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm mb-6">
              Aspiring Digital Marketer passionate about SEO, data-informed audience growth, social media content strategies, and continuous professional excellence.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                aria-label="Anisa Hafila LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                aria-label="Send Email to Anisa Hafila"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-white text-xs py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Career Target & Resume */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="md:text-right">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                Open To Roles
              </h4>
              <p className="text-xs text-slate-400 leading-normal mb-3">
                Digital Marketing Executive<br />
                SEO Executive<br />
                Social Media Marketing Executive
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available Immediately
              </span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-medium transition-all hover:scale-105"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with modern web standards, Next.js &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
