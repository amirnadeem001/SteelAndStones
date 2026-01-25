"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 bg-zinc-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Antra</span>
            </Link>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Elevating spaces through thoughtful design and architectural excellence. 
              Based in New York, working worldwide.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center hover:bg-zinc-100 cursor-pointer transition-colors">
                  <span className="text-xs text-zinc-400">#</span>
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Sitemap", links: ["Home", "Services", "Projects", "About", "Contact"] },
            { title: "Services", links: ["Residential", "Commercial", "Space Planning", "Custom Furniture", "Architecture"] },
            { title: "Contact", links: ["Inquiries", "Careers", "Office Locations", "Press", "Partners"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase()}`} className="text-zinc-500 hover:text-zinc-900 transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-50">
          <p className="text-sm text-zinc-400">&copy; 2024 Antra Design Studio. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-zinc-400 hover:text-zinc-900">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-zinc-400 hover:text-zinc-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
