"use client";

import React from "react";
import {
  Search,
  Calendar,
  FileText,
  Palette,
  Megaphone,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5 text-indigo-400" />,
  Calendar: <Calendar className="w-5 h-5 text-purple-400" />,
  FileText: <FileText className="w-5 h-5 text-cyan-400" />,
  Palette: <Palette className="w-5 h-5 text-pink-400" />,
  Megaphone: <Megaphone className="w-5 h-5 text-amber-400" />,
  PieChart: <PieChart className="w-5 h-5 text-emerald-400" />,
};

export default function Services() {
  const handleDiscussProject = (service: ServiceItem) => {
    const contactSection = document.getElementById("contact");
    const subjectInput = document.getElementById("contact-subject") as HTMLInputElement | null;
    
    if (subjectInput) {
      subjectInput.value = `Inquiry regarding ${service.title}`;
      // Dispatch input event to trigger any React state listener
      subjectInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background Glow */}
      <div className="aurora-bg top-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-700/15" />
      <div className="aurora-bg bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-purple-700/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Areas of Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing Services I Can Help With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Entry-level collaborative services and tactical support grounded in modern best practices, careful research, and honest capabilities.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between shadow-lg shadow-black/20"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                  {iconMap[service.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs text-indigo-300 font-medium mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Best For Tag */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 mb-6">
                  <span className="text-slate-300 font-semibold">Best For: </span>
                  {service.suitableFor}
                </div>
              </div>

              {/* Discuss A Project CTA */}
              <button
                type="button"
                onClick={() => handleDiscussProject(service)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#7C3AED] border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
