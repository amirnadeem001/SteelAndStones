"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Get in Touch</span>
            <h1 className="mt-4 text-6xl font-bold">Let&apos;s Design Your <br /> Future Together</h1>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-md">
              Ready to start your next project? We&apos;re here to help you bring your vision to life. 
              Fill out the form or reach out directly.
            </p>

            <div className="mt-12 space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "hello@antra.design" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Visit Our Studio", value: "123 Design District, NY, NY 10001" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0">
                    <item.icon className="text-zinc-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">{item.label}</h3>
                    <p className="mt-1 text-xl font-bold text-zinc-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 rounded-[3rem] p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-zinc-200 rounded-2xl p-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-zinc-200 rounded-2xl p-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 ml-1">Project Type</label>
                <select className="w-full bg-white border border-zinc-200 rounded-2xl p-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all">
                  <option>Residential Design</option>
                  <option>Commercial Space</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 ml-1">Message</label>
                <textarea className="w-full bg-white border border-zinc-200 rounded-2xl p-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all h-40" placeholder="Tell us about your dream space..."></textarea>
              </div>
              <button className="w-full bg-zinc-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
