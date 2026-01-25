"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  { 
    id: "01", 
    title: "Art Deco Revival", 
    location: "Berlin, Germany",
    year: "2025",
    categories: ["RESIDENTIAL", "SINGLE HOME"],
    image: "/gallery-1.png",
    aspect: "aspect-[16/10]"
  },
  { 
    id: "02", 
    title: "Golden Ratio Residence", 
    location: "Berlin, Germany",
    year: "2025",
    categories: ["SINGLE HOME"],
    image: "/gallery-2.png",
    aspect: "aspect-[16/12]"
  },
  { 
    id: "03", 
    title: "Nordic Minimalist Loft", 
    location: "Berlin, Germany",
    year: "2025",
    categories: ["RESIDENTIAL"],
    image: "/gallery-3.png",
    aspect: "aspect-[16/10]"
  },
  { 
    id: "04", 
    title: "Industrial Elegance", 
    location: "Berlin, Germany",
    year: "2025",
    categories: ["RESIDENTIAL"],
    image: "/modern-space.png",
    aspect: "aspect-[16/11]"
  }
];

export default function ProjectsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
   <div className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Services Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="relative z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Recent Projects
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#c5a47e]">RECENT PROJECTS</span>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="relative py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
              {...fadeIn}
              className="mb-8 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                Our Projects
              </span>
            </motion.div>
            
            <motion.h2 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold leading-[1.1] text-zinc-900 mb-10 tracking-tight"
            >
              Creative <span className="text-[#c5a47e]">Projects That</span> <br /> 
              <span className="text-[#c5a47e]">Define</span> Our Style
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-24">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group flex flex-col"
              >
                <div className={cn(
                  "relative w-full h-[600px] rounded-[2.5rem] overflow-hidden mb-12 shadow-sm transition-all duration-700 group-hover:shadow-3xl",
                  project.aspect
                )}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Category Badges on Top Left of Image */}
                  <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                    {project.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="bg-black/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-black tracking-widest text-white uppercase">
                          {cat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Year Tag on Top Right */}
                  <div className="absolute top-8 right-8">
                    <span className="text-sm font-bold text-white/50">{project.year}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-[#c5a47e] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-zinc-400 font-medium">{project.location}</p>
                  </div>
                  
                  <Link href={`/projects/${project.id}`} className="group/link flex items-center gap-4">
                    <span className="text-sm font-black uppercase tracking-widest text-zinc-900">View Project</span>
                    <div className="h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover/link:bg-zinc-900 group-hover/link:border-zinc-900 transition-all">
                      <ArrowRight size={20} className="group-hover/link:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-32 flex justify-center">
            <button className="flex items-center gap-4 rounded-full border-2 border-zinc-900 px-12 py-5 font-black uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-xl text-zinc-400">Let&apos;s build something extraordinary together.</p>
            </div>
            <Link href="/contact" className="rounded-full bg-[#c5a47e] px-12 py-6 text-sm font-black uppercase tracking-widest text-zinc-950 hover:bg-white transition-all">
              Start Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
