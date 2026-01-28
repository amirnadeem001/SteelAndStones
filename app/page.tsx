"use client";

import Image from "next/image";
import logo from "../public/logo.png";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Star, 
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };



  return (
    <div className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero.png"
            alt="Interior Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          {/* Subtle vignette/gradient for depth */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm sm:mb-8">
              <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.25em]">
                Fast and Reliable
              </span>
            </div>

            <h1 className="mb-8 text-4xl font-bold leading-[1.1] sm:text-6xl md:text-8xl lg:text-[110px] text-white tracking-tight px-4">
              Find Your Inspired <br className="hidden sm:block" />
              Interior Design
            </h1>
            
            <p className="mb-12 text-lg md:text-xl leading-relaxed text-zinc-300 max-w-4xl font-medium">
              To redefine spaces by blending strength and elegance, creating interiors <br className="hidden md:block" /> 
              that inspire, endure, and elevate the experience of every home and office.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/projects" className="group relative flex items-center gap-3 rounded-full bg-[#c5a47e] px-10 py-5 font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-white">
                Explore Projects 
                <div className="h-6 w-6 rounded-full bg-zinc-900/10 flex items-center justify-center group-hover:bg-zinc-900/20">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

       
      </section>

      {/* Who We Are / Experience Section */}
      <section className="relative py-32 bg-zinc-50 overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Some diagonal lines for more 'architectural' feel */}
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="max-w-3xl">
              <motion.div 
                {...fadeIn}
                className="mb-8 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  Our Mission
                </span>
              </motion.div>
              
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] text-zinc-900 tracking-tight"
              >
                Exceptional Living And <span className="text-[#c5a47e]">Working Spaces</span>
              </motion.h2>
            </div>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="max-w-md"
            >
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                We craft exceptional spaces through meticulous design, 
                premium materials, and flawless execution. We are committed 
                to delivering timeless elegance and unmatched quality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Craftsmanship",
                desc: "Every project is executed with meticulous attention to detail, combining strength and elegance for a unique finish.",
                icon: "📐"
              },
              {
                title: "Comprehensive Solutions",
                desc: "From painting and woodwork to flooring, ceilings, and electrical work, we handle every aspect of interiors.",
                icon: "🏠"
              },
              {
                title: "Timeless Design",
                desc: "We create spaces that are not only stylish but enduring, reflecting sophistication and comfort in every detail.",
                icon: "💡"
              },
              {
                title: "Innovative Approach",
                desc: "We blend modern techniques with creative design concepts to deliver unique, functional interiors that inspire.",
                icon: "📋"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-bold leading-tight text-zinc-900 max-w-[153px]">
                    {service.title}
                  </h3>
                  {/* Mocking the geometric icon with simple div circles/lines for that architectural feel */}
                  <div className="relative h-12 w-12 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 border-2 border-[#c5a47e] rounded-tr-3xl rotate-45" />
                    <div className="absolute inset-2 border-b-2 border-r-2 border-[#c5a47e] rounded-tr-xl rotate-45" />
                  </div>
                </div>
                
                <div className="mb-8 w-full h-[1px] bg-zinc-100" />
                
                <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Explore Our Services Section */}
      <section id="services" className="relative py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:border-l md:border-zinc-100 md:pl-12">
            <div className="max-w-4xl">
              <motion.div 
                {...fadeIn}
                className="mb-8 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  Our Services
                </span>
              </motion.div>
              
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] text-zinc-900 tracking-tight"
              >
                Explore Our <span className="text-[#c5a47e]">Comprehensive <br className="hidden sm:block" /> Interior Design</span> Services
              </motion.h2>
            </div>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="max-w-md pb-4"
            >
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                We specialize in transforming visions into reality. Explore our portfolio of 
                innovative architectural and interior design projects crafted with precision.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden"
            >
              <Image
                src="/modern-space.png"
                alt="Service Showcase"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute left-8 bottom-8 max-w-xs">
                <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <p className="text-sm font-medium text-white leading-relaxed">
                    Tailored design services for private homes, 
                    including room makeovers and complete 
                    home transformations.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col">
              {[
                { id: "01", title: "Woodwork & Carpentry", active: true },
                { id: "02", title: "Premium Flooring" },
                { id: "03", title: "Ceiling Design" },
                { id: "04", title: "Wall Finishes" },
                { id: "05", title: "Lighting Solutions" },
                { id: "06", title: "Full Interior Renovation" }
              ].map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={cn(
                    "group flex items-center justify-between py-8 border-b border-zinc-100 cursor-pointer transition-all",
                    service.active ? "text-[#c5a47e]" : "text-zinc-900 hover:text-[#c5a47e]"
                  )}
                >
                  <div className="flex items-center gap-8">
                    <span className={cn(
                      "text-xs font-black tracking-widest",
                      service.active ? "text-[#c5a47e]" : "text-zinc-300"
                    )}>
                      {service.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center transition-all",
                    service.active ? "bg-[#c5a47e] text-zinc-950" : "bg-zinc-50 text-zinc-900 group-hover:bg-[#c5a47e] group-hover:text-zinc-950"
                  )}>
                    <ArrowRight className={cn("rotate-[-45deg] transition-transform", !service.active && "group-hover:rotate-0")} size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Spaces / Where Design Section */}
      <section className="relative py-32 bg-zinc-950 overflow-hidden">
        {/* Background Watermark/Abstract */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center">
          <span className="text-[30vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
            Steel & Stone
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 w-fit">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                  Started in 2013
                </span>
              </div>

              <h2 className="mb-10 text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] text-white tracking-tight">
                Where Spaces <br className="hidden sm:block" />
                Inspire, And <span className="text-[#c5a47e]">Design</span> <br className="hidden sm:block" />
                Comes Alive
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                {[
                  "Premium Quality Materials",
                  "Expert Craftsmanship",
                  "Client-Centric Approach",
                  "Timeless & Innovative"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#c5a47e]" size={20} />
                    <span className="font-bold text-white tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mb-12 text-lg text-zinc-400 leading-relaxed font-medium max-w-xl">
                Whether it&apos;s your home, office, or a commercial project, we 
                are always dedicated to bringing your vision to life. Our 
                numbers speak better than words:
              </p>

              <Link href="/about" className="group flex items-center gap-4 text-white hover:text-[#c5a47e] transition-colors">
                <span className="text-sm font-black uppercase tracking-widest">More About Us</span>
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#c5a47e] group-hover:border-[#c5a47e] transition-all">
                  <ArrowRight size={20} className="group-hover:text-zinc-950 transition-colors" />
                </div>
              </Link>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/gallery-1.png"
                alt="Inspired Space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-x-8 bottom-8">
                {/* Optional floating element for extra flair */}
                <div className="h-[1px] w-full bg-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                value: "2013",
                label: "Years Experience",
                desc: "Improving homes with expert craftsmanship for years"
              },
              {
                value: "190+",
                label: "Projects Completed",
                desc: "Over 250 successful projects delivered with quality and care"
              },
              {
                value: "260+",
                label: "Skilled Tradespeople",
                desc: "Our team of 30 experts ensures top-quality results"
              },
              {
                value: "328+",
                label: "Client Satisfaction",
                desc: "All of our clients are satisfied with our work and service"
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                  {stat.value}
                </span>
                <div className="h-[1px] w-full bg-zinc-100 mb-6" />
                <h4 className="text-xl font-bold text-zinc-900 mb-3">
                  {stat.label}
                </h4>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How We Work Section */}
      <section id="process" className="relative py-48 bg-zinc-50/50 overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-process" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-process)" />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="relative flex flex-col lg:flex-row justify-between gap-12 mb-32 items-start">
            {/* Peeking Image for Top Right */}
           

            <div className="max-w-4xl relative z-10">
              <motion.div 
                {...fadeIn}
                className="mb-8 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  How We Work
                </span>
              </motion.div>
              
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] text-zinc-900 tracking-tight"
              >
                Description <span className="text-[#c5a47e]">Architecture</span> <br /> 
                <span className="text-[#c5a47e]">Process</span> For Exceptional <br /> 
                Results.
              </motion.h2>
            </div>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="max-w-md lg:mt-32 relative z-10"
            >
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                Our process is alive – adapting, refining, and growing with your vision. Always. 
                Like artists with a blank canvas, we transform rooms into living works of art.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {[
              {
                number: "01",
                title: "Initial Consultation",
                desc: "We begin by understanding your vision, goals, and needs, followed by careful planning.",
                image: "/gallery-1.png",
                offset: "lg:mt-0"
              },
              {
                number: "02",
                title: "Design & Planning",
                desc: "Our team creates detailed designs that reflect your requirements.",
                image: "/gallery-2.png",
                offset: "lg:mt-24"
              },
              {
                number: "03",
                title: "Implementation",
                desc: "With carefully selected contractors, we manage every phase.",
                image: "/gallery-3.png",
                offset: "lg:mt-48"
              },
              {
                number: "04",
                title: "Project Handover",
                desc: "Upon completion, we conduct a thorough review, making sure all details.",
                image: "/modern-space.png",
                offset: "lg:mt-72"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={cn(
                  "group bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500",
                  step.offset
                )}
              >
                <div className="relative aspect-[1.4/1] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-10 relative">
                  {/* Watermark Number */}
                  <span className="absolute right-6 bottom-4 text-[110px] font-black text-zinc-50 leading-none pointer-events-none transition-colors group-hover:text-zinc-100/50">
                    {step.number}
                  </span>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                       <span className="text-[#c5a47e]">{step.number}.</span>
                       {step.title}
                    </h3>
                    <p className="text-[15px] text-zinc-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="relative py-32 bg-white overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-projects" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-projects)" />
            <path d="M 0 120 L 120 0" fill="none" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 mb-24">
          <div className="relative flex flex-col items-center text-center">
            {/* Badge on the left - matching the design's offset */}
            <div className="lg:absolute lg:left-0 lg:top-0 mb-12 lg:mb-0">
              <motion.div 
                {...fadeIn}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  Our Projects
                </span>
              </motion.div>
            </div>
            
            <motion.h2 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] text-zinc-900 mb-10 tracking-tight"
            >
              Creative <span className="text-[#c5a47e]">Projects That</span> <br /> 
              <span className="text-[#c5a47e]">Define</span> Our Style
            </motion.h2>

            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="max-w-3xl text-lg text-zinc-500 font-medium leading-relaxed opacity-80"
            >
              Our portfolio showcases a diverse range of projects, from beautifully crafted <br className="hidden md:block" />
              residential spaces functional and stylish commercial interiors
            </motion.p>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative z-10 w-full overflow-hidden px-6 md:px-[calc((100vw-1280px)/2)]">
          <div className="flex gap-10 pb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory items-start">
            {[
              {
                title: "Al Aziz Optics",
                location: "Gujranwala, Pakistan",
                year: "2026",
                categories: ["Retail", "Signage"],
                image: "/projects/Al%20Aziz%20Optics/WhatsApp%20Image%202026-01-25%20at%203.45.56%20PM.jpeg",
                width: "min-w-[320px]",
                aspect: "aspect-[1/1.1]"
              },
              {
                title: "Bhutta Mobile",
                location: "Gujranwala, Pakistan",
                year: "2026",
                categories: ["Commercial", "Identity"],
                image: "/projects/Bhutta%20Mobile/WhatsApp%20Image%202026-01-25%20at%203.57.43%20PM.jpeg",
                width: "min-w-[350px]",
                aspect: "aspect-[1/1.2]",
                mt: "mt-12"
              },
              {
                title: "Kashif Ali Mobiles",
                location: "Gujranwala, Pakistan",
                year: "2026",
                categories: ["Shop Interior"],
                image: "/projects/Kashif%20Ali%20Mobiles/WhatsApp%20Image%202026-01-25%20at%204.00.08%20PM.jpeg",
                width: "min-w-[370px]",
                aspect: "aspect-[1/1.1]"
              },
              {
                title: "Samer Mehdi",
                location: "Pakistan",
                year: "2026",
                categories: ["Corporate", "Branding"],
                image: "/projects/Samer%20Mehdi/WhatsApp%20Image%202026-01-25%20at%204.00.07%20PM.jpeg",
                width: "min-w-[300px]",
                aspect: "aspect-[1/1.3]",
                mt: "mt-8"
              }
            ]
.map((project, idx) => (
              <Link
                href={`/projects/${encodeURIComponent(project.title)}`}
                key={idx}
                className={cn(
                  "flex flex-col snap-center group",
                  project.width,
                  project.mt
                )}
              >
                <div className={cn(
                  "relative w-full rounded-[2.5rem] overflow-hidden mb-8 transition-transform duration-500 group-hover:shadow-2xl",
                  project.aspect
                )}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges Overlay */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="bg-black/10 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                        <span className="text-[9px] font-black tracking-widest text-white uppercase">
                          {cat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Below Card */}
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-[#c5a47e] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-zinc-400 capitalize">
                      {project.location}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-zinc-900 py-24 px-12 text-center text-white"
          >
            <div className="relative z-10 flex flex-col items-center">
              <Star className="text-zinc-500 mb-6" fill="currentColor" size={32} />
              <h2 className="mb-6 max-w-3xl text-4xl sm:text-5xl md:text-[60px] font-bold leading-[1.1] tracking-tight">
                Unlock Your Dream <br className="hidden sm:block" /> Home Today!
              </h2>
              <p className="mb-10 max-w-xl text-lg text-zinc-400">
                Ready to transform your living space? Join over 500+ happy homeowners 
                who trusted us with their vision.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="flex items-center gap-2 rounded-full bg-white px-10 py-5 font-bold text-zinc-900 hover:bg-zinc-100 transition-all">
                  Book Consultation <PhoneCall size={20} />
                </Link>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-zinc-800/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-zinc-800/30 blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
