"use client";

import React from "react";
import {
  Milestone,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { JOURNEY_DATA } from "@/lib/constants";

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background Glow */}
      <div className="aurora-bg top-[25%] right-[-15%] w-[450px] h-[450px] bg-purple-600/15" />
      <div className="aurora-bg bottom-[10%] left-[-15%] w-[450px] h-[450px] bg-indigo-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Growth Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Journey Into Digital Marketing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            A self-directed timeline mapping my progression from core marketing principles to hands-on SEO audits, content architecture, and strategic ad concepts.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500/30" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {JOURNEY_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = milestone.status === "Completed Milestone";

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B1120] border-2 border-indigo-400 shadow-lg shadow-indigo-500/30 items-center justify-center z-20">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-indigo-400 animate-spin" />
                    )}
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="w-full md:w-[45%]">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20">
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {milestone.stage}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            isCompleted
                              ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                              : "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 animate-pulse"
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Skills Acquired */}
                      <div>
                        <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                          Key Competencies Built:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.skillsAcquired.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
