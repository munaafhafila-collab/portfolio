"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  TrendingUp,
  Search,
  Share2,
  BarChart2,
  CheckCircle2,
  Eye,
  Calendar,
  Layers,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  // Cycling animated titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    setIsDownloading(true);
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#4F46E5", "#7C3AED", "#06B6D4", "#FFFFFF"],
      });
    } catch {
      // Fallback gracefully if confetti fails
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Anisa_Hafila_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Aurora Orbs */}
      <div className="aurora-bg top-[-10%] left-[-10%] w-[550px] h-[550px] bg-indigo-600/25" />
      <div className="aurora-bg top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20" />
      <div className="aurora-bg bottom-[-10%] left-[25%] w-[450px] h-[450px] bg-cyan-500/20" />

      {/* Subtle grid background overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>DIGITAL MARKETING PORTFOLIO</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Rotating Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 transition-all duration-500">
                {PERSONAL_INFO.rotatingTitles[currentTitleIndex]}
              </span>
            </div>

            {/* Exact Required Hero Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              &ldquo;{PERSONAL_INFO.heroBio}&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Explore My Projects */}
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <button
                type="button"
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2 group backdrop-blur-md active:scale-[0.98]"
              >
                <Download className={`w-4 h-4 text-cyan-400 transition-transform ${isDownloading ? "animate-bounce" : "group-hover:-translate-y-0.5"}`} />
                <span>{isDownloading ? "Downloading..." : "Download Resume"}</span>
              </button>

              {/* Let's Connect */}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Fresher Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  <span>4</span>
                  <span className="text-cyan-400 text-base font-normal">Projects</span>
                </div>
                <div className="text-xs text-slate-400">SEO & Marketing Cases</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  <span>9+</span>
                  <span className="text-indigo-400 text-base font-normal">Tools</span>
                </div>
                <div className="text-xs text-slate-400">Practiced & Learning</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  <span className="text-emerald-400 text-sm">Fresher</span>
                </div>
                <div className="text-xs text-slate-400">Ready to contribute</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Digital Marketing Dashboard Visual */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Glow container */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/15 shadow-2xl shadow-indigo-950/60">
              
              {/* Inner Dashboard Glass Container */}
              <div className="bg-[#0e1628]/90 rounded-[14px] p-5 sm:p-6 backdrop-blur-2xl">
                
                {/* Dashboard Top Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-medium text-slate-300">
                      Marketing Intelligence Overview
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Metrics Simulation
                  </span>
                </div>

                {/* Dashboard Grid Content */}
                <div className="space-y-4">
                  
                  {/* Traffic Growth Chart Simulation */}
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-slate-200">
                          Organic Search Traffic
                        </span>
                      </div>
                      <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                        +38.4% MoM
                      </span>
                    </div>

                    {/* SVG Interactive Wave Graph */}
                    <div className="relative h-24 w-full mt-2">
                      <svg
                        viewBox="0 0 400 100"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#4F46E5" />
                            <stop offset="50%" stopColor="#7C3AED" />
                            <stop offset="100%" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                          d="M 0 80 Q 50 65, 100 70 T 200 45 T 300 35 T 400 15 L 400 100 L 0 100 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Line */}
                        <path
                          d="M 0 80 Q 50 65, 100 70 T 200 45 T 300 35 T 400 15"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Highlight Point */}
                        <circle cx="300" cy="35" r="4" fill="#06B6D4" className="animate-pulse" />
                        <circle cx="400" cy="15" r="5" fill="#FFFFFF" />
                      </svg>
                      <div className="absolute right-0 top-0 -translate-y-2 bg-cyan-400 text-[#0B1120] text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                        Goal Met
                      </div>
                    </div>
                  </div>

                  {/* 2 Mini Dashboard Cards */}
                  <div className="grid grid-cols-2 gap-3.5">
                    
                    {/* Card 1: SEO Keyword Rank Tracker */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-400 mb-1.5">
                        <span className="text-[11px] font-medium flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5 text-indigo-400" />
                          Top Keyword Rank
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">+14 pos</span>
                      </div>
                      <div className="text-lg font-bold text-white">#3 on Google</div>
                      <div className="text-[10px] text-slate-400 truncate mt-1">
                        &quot;photo editing tips 2025&quot;
                      </div>
                    </div>

                    {/* Card 2: Social Media Engagement */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-400 mb-1.5">
                        <span className="text-[11px] font-medium flex items-center gap-1.5">
                          <Share2 className="w-3.5 h-3.5 text-purple-400" />
                          Social Reach
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">5.2% Eng.</span>
                      </div>
                      <div className="text-lg font-bold text-white">24.1K Views</div>
                      <div className="text-[10px] text-slate-400 truncate mt-1">
                        Educational Carousels
                      </div>
                    </div>
                  </div>

                  {/* Content Calendar Preview snippet */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2 text-slate-300 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Content Strategy Pillar Schedule</span>
                      </div>
                      <span className="text-[10px] text-slate-400">7-Day Cycle</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                      <div className="p-1.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        <div className="font-semibold">Mon</div>
                        <div className="text-[9px] text-slate-400">Educate</div>
                      </div>
                      <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        <div className="font-semibold">Wed</div>
                        <div className="text-[9px] text-slate-400">Inspire</div>
                      </div>
                      <div className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        <div className="font-semibold">Fri</div>
                        <div className="text-[9px] text-slate-400">Engage</div>
                      </div>
                      <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        <div className="font-semibold">Sun</div>
                        <div className="text-[9px] text-slate-400">Convert</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Tool Badge 1: GA4 */}
            <div className="hidden sm:flex absolute -top-5 -right-4 px-3 py-2 rounded-xl bg-[#0B1120]/90 border border-white/20 backdrop-blur-md shadow-xl items-center gap-2 animate-bounce duration-1000">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                <BarChart2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">GA4 Ready</div>
                <div className="text-[9px] text-slate-400">Event Tracking</div>
              </div>
            </div>

            {/* Floating Tool Badge 2: Canva & GSC */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#0B1120]/90 border border-white/20 backdrop-blur-md shadow-xl items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">Canva & SEO</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Practical Design
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
