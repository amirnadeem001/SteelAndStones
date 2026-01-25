"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Shield, Users, Clock, Zap, Layout, Gem } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const strengths = [
    { title: "Premium Craftsmanship", icon: <Gem size={24} />, desc: "Meticulous attention to detail, combining strength and elegance." },
    { title: "Comprehensive Solutions", icon: <Layout size={24} />, desc: "From painting and woodwork to flooring, ceilings, and electrical work." },
    { title: "Timeless Design", icon: <Star size={24} />, desc: "Stylish and enduring spaces reflecting sophistication and comfort." },
    { title: "Innovative Approach", icon: <Zap size={24} />, desc: "Modern techniques blended with creative design concepts." },
    { title: "Quality Materials", icon: <Shield size={24} />, desc: "Finest materials ensuring durability and a luxurious finish." },
    { title: "Client-Centric Service", icon: <Users size={24} />, desc: "Your vision is our priority; we collaborate closely with you." },
    { title: "Reliability & Trust", icon: <Clock size={24} />, desc: "Timely delivery and transparent processes are at our heart." },
    { title: "Versatility", icon: <Layout size={24} />, desc: "Catering to both residential and commercial projects with precision." }
  ];

  const whyChooseUs = [
    {
      title: "Comprehensive Interior Solutions",
      desc: "We handle every aspect of your interior needs under one roof — from painting, woodwork, flooring, and ceiling design to electrical and lighting solutions."
    },
    {
      title: "Premium Quality & Materials",
      desc: "At Steel & Stone Interiors, we use only the finest materials, combining strength, durability, and elegance in every project."
    },
    {
      title: "Expert Craftsmanship",
      desc: "Our team of skilled designers, architects, and craftsmen brings years of experience and meticulous attention to detail to every project."
    },
    {
      title: "Timeless & Innovative Design",
      desc: "We create interiors that are both stylish and enduring. Our designs blend modern innovation with classic elegance."
    },
    {
      title: "Client-Centric Approach",
      desc: "Your vision is our priority. We work closely with clients, understanding their lifestyle, preferences, and requirements."
    },
    {
      title: "Reliability & Professionalism",
      desc: "We believe in transparent communication, timely delivery, and flawless execution. We respect deadlines and budgets."
    },
    {
      title: "Versatility & Experience",
      desc: "From luxury homes and offices to commercial spaces, we have experience handling projects of all sizes with creativity."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a47e]">Our Vision</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight text-zinc-900">
              Blending Strength, <br />
              <span className="italic font-serif text-[#c5a47e]">Crafting Elegance</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed uppercase font-medium">
              "To redefine spaces by blending strength and elegance, creating interiors that inspire, endure, and elevate the experience of every home and office."
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Premium Craftsmanship",
                "Comprehensive Solutions",
                "Timeless Design",
                "Innovative Approach"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#c5a47e] flex items-center justify-center">
                    <CheckCircle2 className="text-zinc-900" size={14} />
                  </div>
                  <span className="font-bold text-zinc-900">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image src="/hero.png" alt="Steel & Stone Interiors" fill className="object-cover" />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div {...fadeIn} className="bg-zinc-950 rounded-[3rem] p-12 md:p-24 text-white text-center mb-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <span className="text-[20vw] font-black text-white/5 tracking-tighter uppercase whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                MISSION
             </span>
          </div>
          <h2 className="text-5xl font-bold mb-8 relative z-10">Our Mission</h2>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium relative z-10">
            "At Steel & Stone Interiors, we craft exceptional living and working spaces through meticulous design, premium materials, and flawless execution. We are committed to delivering timeless elegance, innovative solutions, and unmatched quality that transforms ideas into enduring beauty."
          </p>
        </motion.div>

        {/* Strengths Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a47e]">Our Strengths</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-zinc-900">What Makes Us Strong</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-[#c5a47e] mb-6 shadow-sm group-hover:bg-[#c5a47e] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-24 bg-zinc-50 rounded-[3rem] px-8 md:px-20">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#c5a47e]">Why Steel & Stone</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">The Perfect Choice For Your Project</h2>
              <p className="mt-8 text-lg text-zinc-500 leading-relaxed font-medium">
                We don’t just design interiors — we craft experiences. Spaces that inspire, endure, and reflect your personality.
              </p>
              
              <div className="mt-12 p-8 bg-zinc-900 rounded-3xl text-white">
                <p className="text-lg italic font-serif text-[#c5a47e] mb-4">Our Promise</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  "At Steel & Stone Interiors, we don’t just design interiors — we craft experiences. Elegance, strength, and perfection in every detail."
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-zinc-200">{i + 1}.</span>
                    <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                  </div>
                  <p className="text-zinc-500 leading-relaxed font-medium pl-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
