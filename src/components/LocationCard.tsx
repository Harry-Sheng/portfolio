import { GlassCard } from "./GlassCard";
import { MapPin } from "lucide-react";

export function LocationCard() {
  return (
    <GlassCard className="h-full flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12,0/600x400?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className="relative z-10 p-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          San Francisco, CA
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-1">Based in SF</h3>
        <p className="text-sm text-gray-300">Open to remote work worldwide.</p>
      </div>
      
      <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/10 group-hover:scale-110 transition-transform" />
    </GlassCard>
  );
}
