"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-space.png"
            alt="Contact Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em]"
          >
            <Link href="/" className="text-white hover:text-[#c5a47e] transition-colors">Home</Link>
            <span className="text-[#c5a47e] font-light">&gt;</span>
            <span className="text-[#c5a47e]">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Subtle architectural background pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            {/* Left side: Badge */}
            <div className="lg:col-span-3">
              <motion.div 
                {...fadeIn}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 w-fit shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                  Get In Touch
                </span>
              </motion.div>
            </div>

            {/* Middle: Heading and Info */}
            <div className="lg:col-span-9">
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold leading-[1.1] text-zinc-900 mb-20 tracking-tight"
              >
                Have A Project In <span className="text-[#c5a47e]">Mind?</span> Let&apos;s <br />
                <span className="text-[#c5a47e]">Make</span> It Happen
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                  {...fadeIn}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Address:</h4>
                  <p className="text-2xl font-bold leading-snug max-w-sm">
                    5609 E Sprague Ave,<br />
                    Spokane Valley, WA 99212, USA
                  </p>
                </motion.div>

                <motion.div 
                  {...fadeIn}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Support:</h4>
                  <div className="space-y-2">
                    <p className="text-[#c5a47e] text-lg font-bold">+(084) 456-0789</p>
                    <p className="text-3xl font-bold truncate">Support@Example.Com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src="/gallery-2.png"
                alt="Modern Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Right side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2.5">
                    <label className="text-[15px] font-bold text-zinc-900 ml-1">Full Name *</label>
                    <input type="text" className="w-full bg-white border border-zinc-100 rounded-full py-4 px-8 focus:ring-2 focus:ring-[#c5a47e] outline-none transition-all font-medium text-zinc-500 shadow-sm" placeholder="Your Name *" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[15px] font-bold text-zinc-900 ml-1">Phone *</label>
                    <input type="tel" className="w-full bg-white border border-zinc-100 rounded-full py-4 px-8 focus:ring-2 focus:ring-[#c5a47e] outline-none transition-all font-medium text-zinc-500 shadow-sm" placeholder="Phone" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[15px] font-bold text-zinc-900 ml-1">Email Address *</label>
                    <input type="email" className="w-full bg-white border border-zinc-100 rounded-full py-4 px-8 focus:ring-2 focus:ring-[#c5a47e] outline-none transition-all font-medium text-zinc-500 shadow-sm" placeholder="Email Address *" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[15px] font-bold text-zinc-900 ml-1">Subject *</label>
                    <input type="text" className="w-full bg-white border border-zinc-100 rounded-full py-4 px-8 focus:ring-2 focus:ring-[#c5a47e] outline-none transition-all font-medium text-zinc-500 shadow-sm" placeholder="I Want To" />
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  <label className="text-[15px] font-bold text-zinc-900 ml-1">Your Message *</label>
                  <textarea className="w-full bg-white border border-zinc-100 rounded-[2rem] p-8 focus:ring-2 focus:ring-[#c5a47e] outline-none transition-all h-48 font-medium text-zinc-500 shadow-sm resize-none" placeholder="Your Message.."></textarea>
                </div>

                <button className="w-fit bg-zinc-900 text-white font-bold py-5 px-12 rounded-full flex items-center justify-center gap-3 hover:bg-[#c5a47e] hover:text-zinc-900 transition-all group">
                  Send Message 
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

