"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  image: string;
  categories: string[];
  year: string;
  location: string;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png" // Fallback if no hero image found
            alt="Recent Projects Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Portfolio
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#c5a47e]">OUR PROJECTS</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              {...fadeIn}
              className="mb-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
            >
              <div className="h-2 w-2 rounded-full bg-[#c5a47e]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Showcasing Excellence
              </span>
            </motion.div>
            
            <motion.h2 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-[1.1] text-zinc-900 mb-6 tracking-tight"
            >
              Transforming <span className="text-[#c5a47e]">Ideas Into</span> <br /> 
              Print <span className="text-[#c5a47e]">Realities</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link 
                      href={`/projects/${encodeURIComponent(project.title)}`}
                      className="w-full bg-white/90 backdrop-blur-md py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm tracking-widest uppercase text-zinc-900"
                    >
                      View Gallery <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {project.categories.map((cat, i) => (
                      <span key={i} className="text-[10px] font-bold text-[#c5a47e] uppercase tracking-widest">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#c5a47e] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c5a47e]/5 -skew-x-12 translate-x-1/4" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Need a Custom Project?</h2>
              <p className="text-xl text-white/60">Let's discuss how we can bring your brand to life.</p>
            </div>
            <Link href="/contact" className="px-10 py-5 bg-[#c5a47e] text-zinc-900 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all rounded-full shadow-xl shadow-black/20">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
