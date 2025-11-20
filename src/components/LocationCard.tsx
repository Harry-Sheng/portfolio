import { GlassCard } from "./GlassCard";
import { MapPin } from "lucide-react";

export function LocationCard() {
  return (
    <GlassCard className="h-full flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/auckland.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          Auckland, NZ
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-1">Based in NZ</h3>
        <p className="text-sm text-gray-300">Open to remote work worldwide.</p>
      </div>
      
      <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white/5 group-hover:scale-110 transition-transform duration-500" />
    </GlassCard>
  );
}
