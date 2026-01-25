"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "The Nordic Retreat", category: "Residential", image: "/gallery-1.png" },
  { id: 2, title: "Modernist Haven", category: "Residential", image: "/gallery-2.png" },
  { id: 3, title: "Artisan Loft", category: "Commercial", image: "/gallery-3.png" },
  { id: 4, title: "Zen Sanctum", category: "Residential", image: "/hero.png" },
  { id: 5, title: "Corporate Edge", category: "Commercial", image: "/modern-space.png" },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400"
            >
              Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-6xl font-bold"
            >
              Recent Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-zinc-500 max-w-md"
            >
              Highlighting our finest work from luxury apartments to serene countryside retreats.
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-4">
            {["All", "Residential", "Commercial", "Hospitality"].map((filter, i) => (
              <motion.button 
                key={filter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={cn(
                  "px-6 py-2 text-sm font-semibold rounded-full transition-all border",
                  filter === "All" ? "bg-zinc-900 border-zinc-900 text-white" : "border-zinc-200 hover:border-zinc-900"
                )}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-6 bg-white rounded-2xl shadow-xl">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">{project.category}</p>
                    <h4 className="mt-1 text-lg font-bold">{project.title}</h4>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                      View Project <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
