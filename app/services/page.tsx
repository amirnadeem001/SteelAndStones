"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  { 
    id: "01", 
    title: "Residential Interior Design", 
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    image: "/modern-space.png"
  },
  { 
    id: "02", 
    title: "Commercial Interior Design", 
    desc: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and restaurants.",
    image: "/service.png"
  },
  { 
    id: "03", 
    title: "Interior Design Consultation", 
    desc: "Providing professional advice on concepts, color schemes & material selection.",
    image: "/gallery-3.png"
  },
  { 
    id: "04", 
    title: "Outdoor & Landscape Design", 
    desc: "Expertly designed outdoor spaces that complement your architecture and lifestyle.",
    image: "/gallery-2.png"
  },
  { 
    id: "05", 
    title: "Renovation And Remodeling", 
    desc: "Taking your existing space and turning it into something entirely new and beautiful.",
    image: "/gallery-1.png"
  },
  { 
    id: "06", 
    title: "Interior 2D/3D Layouts", 
    desc: "Visualizing your space with precision through advanced modeling and professional layouts.",
    image: "/hero.png"
  }
];

export default function ServicesPage() {
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
            Services 01
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#c5a47e]">SERVICES 01</span>
          </motion.div>
        </div>
      </section>

      {/* Explore Grid Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-32 relative">
            <div className="hidden lg:block absolute top-[10px] left-[180px] right-0 h-[1px] bg-zinc-100 z-0" />
            
            <div className="z-10 bg-white pr-12 pt-0 md:pt-4">
              <motion.div 
                {...fadeIn}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  Our Services
                </span>
              </motion.div>
            </div>

            <div className="max-w-4xl z-10">
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold leading-[1.1] text-zinc-900 mb-10"
              >
                Explore Our <span className="text-[#c5a47e]">Comprehensive <br /> Interior Design</span> Services
              </motion.h2>
              
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="max-w-2xl text-lg text-zinc-500 font-medium leading-relaxed"
              >
                We specialize in transforming visions into reality. Explore our portfolio of 
                innovative architectural and interior design projects crafted with precision.
              </motion.p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div className={cn(
                  "relative w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl",
                  idx === 1 || idx === 4 ? "aspect-[3/4]" : "aspect-[4/3.5]"
                )}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Number */}
                  <div className="absolute top-8 left-8">
                    <span className="text-3xl font-black text-white drop-shadow-md">
                      {service.id}
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight group-hover:text-[#c5a47e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-zinc-900 py-32 px-12 text-center text-white"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="mb-8 max-w-3xl text-5xl font-bold md:text-7xl leading-tight">
                Ready to transform <br /> your space?
              </h2>
              <p className="mb-12 max-w-xl text-lg text-zinc-400">
                Our experts are ready to bring your vision to life with precision 
                and creative flair.
              </p>
              <Link href="/contact" className="group flex items-center gap-4 rounded-full bg-[#c5a47e] px-10 py-5 font-bold uppercase tracking-widest text-zinc-900 hover:bg-white transition-all">
                Book a Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
