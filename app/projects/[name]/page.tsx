import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, MapPin, Tag } from 'lucide-react';

export default async function ProjectDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  const projectPath = path.join(projectsDir, decodedName);
  
  let images: string[] = [];
  try {
    if (fs.existsSync(projectPath)) {
      const files = fs.readdirSync(projectPath);
      images = files
        .filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
        .map(file => `/projects/${encodeURIComponent(decodedName)}/${encodeURIComponent(file)}`);
    }
  } catch (err) {
    console.error(err);
  }

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#c5a47e] hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24">
      {/* Dynamic Header */}
      <header className="bg-white border-b border-zinc-100 flex-col pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#c5a47e] transition-colors mb-12 uppercase tracking-[0.2em]"
          >
            <ChevronLeft size={16} />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold text-zinc-900 tracking-tighter">
                {decodedName}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-500">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#c5a47e]" />
                  <span>January 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#c5a47e]" />
                  <span>Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-[#c5a47e]" />
                  <span>Print & Branding</span>
                </div>
              </div>
            </div>
            
            <div className="h-px md:h-20 w-full md:w-px bg-zinc-200" />
            
            <div className="max-w-md">
              <p className="text-zinc-600 leading-relaxed font-medium">
                A premium print and design showcase for {decodedName}, focusing on high-quality materials and exquisite finishing.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                index % 4 === 0 ? "md:col-span-2 md:row-span-2 h-[600px]" : "h-[400px]"
              )}
            >
              <Image
                src={src}
                alt={`${decodedName} image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-black uppercase tracking-[0.3em] border border-white/30 px-6 py-3 rounded-full backdrop-blur-sm">
                  View Full Resolution
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#c5a47e] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-700 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Interested in something similar?</h2>
          <Link 
            href="/contact" 
            className="inline-flex bg-[#c5a47e] text-zinc-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all relative z-10"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple helper to mimic cn functionality if not available in server components
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
