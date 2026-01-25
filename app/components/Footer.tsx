"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";

export function Footer() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-24 pb-12 overflow-hidden">
      {/* Subtle Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/hero.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo and Address */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image
                src={logo}
                alt="Steel & Stone Interiors Logo"
                className="h-30 w-auto object-contain"
              />
            </Link>
            
            <p className="text-lg font-bold mb-8 leading-tight max-w-[250px]">
              We Transform Your Vision Into Beautifully Crafted Spaces.
            </p>
            
            <address className="not-italic text-sm text-zinc-400 leading-relaxed font-medium">
              5609 E Sprague Ave, Spokane Valley,<br />
              WA 99212, USA
            </address>
          </div>

          {/* Quick Links Column 1 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight">Company</h3>
            <div className="flex flex-col gap-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Projects", href: "/projects" },
                { name: "Contact Us", href: "/contact" },
                { name: "Services", href: "/services" },
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  className="text-xl font-bold text-zinc-400 hover:text-[#c5a47e] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>


          {/* Contact Info and Socials */}
          <div className="flex flex-col items-center lg:items-end lg:text-right col-span-1 lg:col-span-2">
            <div className="flex flex-col items-center lg:items-end mb-8 sm:mb-12 text-center lg:text-right">
              <a href="tel:+0844560789" className="text-xl sm:text-2xl font-bold text-[#c5a47e] mb-2 hover:text-white transition-all">
                +(084) 456-0789
              </a>
              <div className="h-[1px] w-32 bg-white/10 mb-4 hidden lg:block" />
              <a href="mailto:Support@example.com" className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-[#c5a47e] transition-colors uppercase break-all sm:break-normal">
                Support@example.com
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/90">
              {["Facebook", "Instagram", "YouTube", "Twitter"].map((social, idx, arr) => (
                <div key={idx} className="flex items-center gap-4">
                  <Link href="#" className="hover:text-[#c5a47e] transition-colors">
                    {social}
                  </Link>
                  {idx < arr.length - 1 && <span className="text-white/20">-</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-sm text-zinc-500 font-medium">
          <p>© 2026 Steel & Stone Interiors. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
