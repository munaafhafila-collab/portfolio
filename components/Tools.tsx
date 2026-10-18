"use client";

import React from "react";
import {
  Palette,
  BarChart3,
  Search,
  TrendingUp,
  Key,
  Target,
  Layers,
  Globe,
  Cpu,
  Wrench,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { TOOLS_DATA } from "@/lib/constants";

const toolIcons: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-pink-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  Search: <Search className="w-5 h-5 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  Key: <Key className="w-5 h-5 text-emerald-400" />,
  Target: <Target className="w-5 h-5 text-rose-400" />,
  Layers: <Layers className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-teal-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
};

export default function Tools() {
  return (
    <section id="tools" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg top-[30%] left-[-10%] w-[450px] h-[450px] bg-indigo-700/15" />
      <div className="aurora-bg bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-cyan-700/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Marketing Tools & Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Essential software, search consoles, and AI tools I actively utilize in sandbox projects and ongoing skill development.
          </p>
        </div>

        {/* Tools 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_DATA.map((tool, idx) => {
            const isPracticed = tool.status === "Practiced in Projects";

            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {toolIcons[tool.iconName] || <Wrench className="w-5 h-5 text-indigo-400" />}
                    </div>
                    
                    {/* Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isPracticed
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                      }`}
                    >
                      {isPracticed ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Practiced</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-3 h-3 text-indigo-400" />
                          <span>Learning</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <div className="text-xs text-indigo-300 font-medium mb-3">
                    {tool.category}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Proficiency Stage</span>
                  <span className="text-slate-300 font-medium">{tool.status}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
