"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Layout, 
  Map, 
  Paintbrush, 
  Compass, 
  PenTool,
  ArrowRight
} from "lucide-react";

const services = [
  { title: "Residential Design", icon: Home, desc: "Bespoke living spaces tailored to your lifestyle and comfort." },
  { title: "Commercial Spaces", icon: Layout, desc: "Modern office environments that inspire productivity and brand identity." },
  { title: "Space Planning", icon: Map, desc: "Optimizing flow and functionality for any floor plan or architectural layout." },
  { title: "Color Consultation", icon: Paintbrush, desc: "Expert palettes that define the mood and character of your sanctuary." },
  { title: "Interior Architecture", icon: Compass, desc: "Structural enhancements and spatial modifications for a cohesive design." },
  { title: "Custom Furniture", icon: PenTool, desc: "Unique pieces crafted specifically for your space by our master artisans." },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-6xl font-bold"
          >
            Comprehensive Design Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-zinc-500 max-w-2xl"
          >
            From initial concept to the final finishing touch, we provide a full range of interior design services 
            tailored to create exceptional environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-10 rounded-3xl bg-zinc-50 hover:bg-zinc-900 hover:text-white transition-all duration-500 border border-zinc-100"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-zinc-800 transition-colors">
                <service.icon size={28} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {service.desc}
              </p>
              <button className="mt-8 flex items-center gap-2 text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">
                Learn More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
