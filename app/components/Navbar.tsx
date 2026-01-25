"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Search, LayoutGrid, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full px-6 py-5 transition-all duration-300",
        isScrolled || mobileMenuOpen ? "bg-zinc-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[2600px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={logo}
            alt="Antra Logo"
            className="h-16 md:h-24 lg:h-30 w-auto object-contain transition-all"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-1 text-[13px] font-bold tracking-wider uppercase transition-colors",
                pathname === link.href ? "text-[#c5a47e]" : "text-white hover:text-[#c5a47e]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-3 text-white">
            <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
              <PhoneCall size={18} className="text-[#c5a47e]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Call Us Phone</p>
              <p className="text-sm font-bold">(+480) 123 678 900</p>
            </div>
          </div>
          
          <Link href="/contact" className="rounded-full bg-[#c5a47e] px-8 py-4 text-xs font-bold uppercase tracking-widest text-zinc-900 hover:bg-white transition-all">
            Get A Quote!
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button 
          className="block lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#111111] p-8 flex flex-col lg:hidden overflow-y-auto pt-32">
          {/* Close button inside the menu to ensure it's always accessible and matches the screenshot position */}
          <button 
            className="absolute top-10 right-8 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-3xl font-bold uppercase tracking-widest flex justify-between items-center border-b border-white/5 pb-6",
                  pathname === link.href ? "text-[#c5a47e]" : "text-white"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={24} className="opacity-50" />}
              </Link>
            ))}
            
            <div className="mt-12 flex flex-col gap-10">
              <div className="flex items-center gap-5 text-white">
                <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center">
                  <PhoneCall size={28} className="text-[#c5a47e]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">Call Us Phone</p>
                  <p className="text-xl font-bold">(+480) 123 678 900</p>
                </div>
              </div>
              <Link href="/contact" className="w-full text-center rounded-full bg-[#c5a47e] py-7 text-xs font-black uppercase tracking-[0.3em] text-zinc-900 shadow-xl">
                Get A Quote!
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
