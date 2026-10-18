"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  BookOpen,
  Layers,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/lib/constants";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background Glow */}
      <div className="aurora-bg top-[15%] left-[-15%] w-[500px] h-[500px] bg-indigo-600/15" />
      <div className="aurora-bg bottom-[15%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Digital Marketing Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Real-world simulated projects and strategy blueprints demonstrating hands-on proficiency in SEO keyword research, editorial architecture, social media planning, and paid advertising concepts.
          </p>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all duration-500 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-xl shadow-black/20"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#0e1628]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/60 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      {project.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Tools Used Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                      Tools Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-cyan-300" />
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  aria-label={`Preview ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">Preview</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal Dialog */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
