"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Our Story</span>
            <h1 className="mt-4 text-7xl font-bold leading-tight">
              Designing Spaces, <br />
              <span className="italic font-serif text-zinc-400">Defining Lives</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Founded in 2010, Antra Design Studio has grown from a boutique firm in New York 
              to a global leader in high-end interior design. We believe that architecture 
              and design have the power to influence how we feel, think, and interact with the world.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "15+ Design Awards",
                "World-Class Team",
                "Global Projects",
                "Sustainable Living"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-zinc-900 flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={14} />
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
            className="relative aspect-square rounded-[3rem] overflow-hidden"
          >
            <Image src="/hero.png" alt="Our Studio" fill className="object-cover" />
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-white text-center">
          <h2 className="text-5xl font-bold mb-8">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
            To create environments that are not only aesthetically breathtaking but also 
            deeply personal and functional. We work at the intersection of craftsmanship 
            and innovation to deliver spaces that stand the test of time.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
