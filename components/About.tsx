"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Search,
  Share2,
  Sparkles,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Compass,
  CheckCircle,
} from "lucide-react";
import { ABOUT_HIGHLIGHTS, PERSONAL_INFO } from "@/lib/constants";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  Search: <Search className="w-5 h-5 text-cyan-400" />,
  Share2: <Share2 className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-rose-400" />,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg top-[20%] left-[-15%] w-[450px] h-[450px] bg-indigo-700/15" />
      <div className="aurora-bg bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-cyan-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Anisa Hafila</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Creative Thinking. Strategic Marketing. Continuous Growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            An ambitious digital marketing fresher committed to learning how strategic intent, data analytics, and engaging storytelling work together to build authentic online presence.
          </p>
        </div>

        {/* Narrative & Portrait Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Portrait & Persona Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative gradient border */}
              <div className="relative w-full rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-cyan-500/30 shadow-2xl shadow-indigo-950/70">
                <div className="relative w-full aspect-[4/5] min-h-[440px] sm:min-h-[480px] rounded-[22px] overflow-hidden bg-[#0e1628]">
                  <Image
                    src="/images/anisa-portrait.jpg"
                    alt="Anisa Hafila - Aspiring Digital Marketer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Bottom overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent">
                    <div className="text-white font-bold text-lg">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-cyan-300 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Aspiring Digital Marketer & Fresher
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-4 -right-3 sm:-right-6 px-4 py-3 rounded-2xl bg-[#0B1120]/95 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Entry-Level Ready</div>
                  <div className="text-[10px] text-slate-400">SEO • Social • Content</div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 text-base leading-relaxed">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>The Curiosity That Drives My Marketing</span>
              </h3>
              <p className="mb-4">
                My interest in digital marketing began with a fundamental question: <span className="text-indigo-300 font-medium">Why do certain websites effortlessly captivate audiences while others remain invisible?</span> Exploring that curiosity opened my eyes to the power of search intent, psychological copywriting, and search engine algorithms.
              </p>
              <p className="mb-4">
                As a fresher, I don’t bring years of corporate tenure; instead, I bring an active, up-to-date grasp of modern marketing workflows, relentless curiosity, and hands-on practice. Through personal sandbox projects, simulated website audits, and structured content calendars, I have translated theoretical marketing concepts into tangible blueprints.
              </p>
              <p>
                Whether researching long-tail keywords for an emerging blog, planning a multi-pillar social media calendar, or drafting high-converting ad copy variations, I approach every challenge with analytical rigor, creative energy, and a desire to deliver real value.
              </p>
            </div>

            {/* Core Values / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Audience-First Mindset</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Matching real user search intent and solving authentic customer pain points before writing a single word.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Data-Guided Decisions</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Relying on keyword search volumes, crawl data, and engagement feedback rather than guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Key Highlight Cards */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Focus Areas & Core Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Key dimensions of my digital marketing development and practical exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-medium text-indigo-400 group-hover:text-cyan-400 transition-colors">
                  <span>Explore in Projects</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
