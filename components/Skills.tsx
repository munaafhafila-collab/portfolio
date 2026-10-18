"use client";

import React, { useState } from "react";
import {
  Search,
  Share2,
  FileText,
  Megaphone,
  BarChart3,
  CheckCircle2,
  BookOpen,
  Filter,
  Sparkles,
} from "lucide-react";
import { SKILLS_CATEGORIES, SKILLS_DATA, SkillItem } from "@/lib/constants";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const practicedCount = SKILLS_DATA.filter((s) => s.level === "Practiced in Projects").length;
  const learningCount = SKILLS_DATA.filter((s) => s.level === "Currently Learning").length;

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg top-[30%] right-[-15%] w-[500px] h-[500px] bg-purple-700/15" />
      <div className="aurora-bg bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-indigo-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Marketing Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Core Competencies & Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Organized across SEO, social media marketing, content development, advertising concepts, and analytics. Transparently categorized by project practice vs active learning.
          </p>

          {/* Honest Status Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Practiced in Projects ({practicedCount})</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Currently Learning ({learningCount})</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {SKILLS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/40 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const isPracticed = skill.level === "Practiced in Projects";

            return (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                        isPracticed
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                      }`}
                    >
                      {isPracticed ? (
                        <>
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Practiced</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-2.5 h-2.5 text-indigo-400" />
                          <span>Learning</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="capitalize">Category: {skill.category}</span>
                  <span className="text-slate-400 font-medium">Applied in Sandbox</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
