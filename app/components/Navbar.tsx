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
            className="h-30 w-auto object-contain"
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
          className="block lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-[60] bg-zinc-900 p-6 flex flex-col h-screen lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-bold uppercase tracking-wider text-white flex justify-between items-center border-b border-white/10 pb-4",
                  pathname === link.href && "text-[#c5a47e]"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={20} />}
              </Link>
            ))}
            
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center">
                  <PhoneCall size={20} className="text-[#c5a47e]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Call Us Phone</p>
                  <p className="text-lg font-bold">(+480) 123 678 900</p>
                </div>
              </div>
              <Link href="/contact" className="w-full text-center rounded-full bg-[#c5a47e] py-6 text-sm font-bold uppercase tracking-widest text-zinc-900">
                Get A Quote!
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
