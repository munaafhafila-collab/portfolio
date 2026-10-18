"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  CheckCircle2,
  Layers,
  Search,
  ExternalLink,
  Tag,
  ArrowRight,
  Sparkles,
  Info,
} from "lucide-react";
import { ProjectCaseStudy } from "@/lib/constants";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0B1120] border border-white/20 rounded-3xl shadow-2xl text-left flex flex-col focus:outline-none">
        
        {/* Modal Header Bar with Thumbnail */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-[#0e1628]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 hover:scale-105 transition-all focus:outline-none"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badges & Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                <Info className="w-3 h-3" />
                {project.statusLabel}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-cyan-300 mt-1 font-medium">{project.tagline}</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tools Used Badges */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Tools & Methodologies Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] border border-white/10 text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Search className="w-4 h-4 text-indigo-400" />
                The Core Challenge & Intent
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Strategy Breakdown Steps */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Strategic Execution & Methodology
            </h3>
            <div className="space-y-4">
              {project.strategySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-colors"
                >
                  <h4 className="text-base font-bold text-indigo-300 mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3">{step.description}</p>
                  <div className="space-y-1.5 pl-2 border-l-2 border-indigo-500/30">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable Specific Preview (Table, Calendar, Checklist, Ad Copy) */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">
              {project.deliverablePreview.title}
            </h3>

            {/* If Table */}
            {project.deliverablePreview.type === "table" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-300 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-3">Target Keyword</th>
                      <th className="p-3">Est. Search Volume</th>
                      <th className="p-3">Search Intent</th>
                      <th className="p-3">Competition</th>
                      <th className="p-3">Target Content Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {project.deliverablePreview.data.map((row: any, rIdx: number) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02]">
                        <td className="p-3 font-medium text-white">{row.keyword}</td>
                        <td className="p-3 text-cyan-300">{row.volume}</td>
                        <td className="p-3">{row.intent}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                            {row.difficulty}
                          </span>
                        </td>
                        <td className="p-3 text-indigo-300">{row.targetPage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* If SEO Checklist */}
            {project.deliverablePreview.type === "seoChecklist" && (
              <div className="space-y-2">
                {project.deliverablePreview.data.map((chk: any, cIdx: number) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {chk.item}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300">
                        Priority: {chk.priority}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300">
                        {chk.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* If Content Calendar */}
            {project.deliverablePreview.type === "calendar" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverablePreview.data.map((cal: any, calIdx: number) => (
                  <div key={calIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-cyan-300">{cal.day}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-semibold">
                        {cal.pillar}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mb-1">Format: {cal.format}</div>
                    <div className="text-white font-medium mb-1.5">{cal.topic}</div>
                    <div className="text-[10px] text-slate-400 italic">CTA: {cal.cta}</div>
                  </div>
                ))}
              </div>
            )}

            {/* If Ad Copy Variations */}
            {project.deliverablePreview.type === "adCopy" && (
              <div className="space-y-4">
                {project.deliverablePreview.data.map((ad: any, adIdx: number) => (
                  <div key={adIdx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-indigo-400 text-sm">{ad.variant}</span>
                      <span className="text-[10px] text-slate-400">{ad.platform}</span>
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{ad.headline}</div>
                    <div className="text-slate-300 mb-3">{ad.body}</div>
                    <div className="inline-block px-3 py-1 rounded bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 text-[10px] font-bold">
                      CTA Button: {ad.cta}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Key Insights & Honest Fresher Takeaway */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Key Learning & Strategic Insights
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.keyInsights.map((insight, inIdx) => (
                <li key={inIdx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Close CTA */}
          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <p className="text-xs text-slate-400">
              Created by Anisa Hafila for portfolio presentation.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
