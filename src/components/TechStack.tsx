import { GlassCard } from "./GlassCard";
import { Brain, Cloud, Code2, Coffee, Globe, Smartphone } from "lucide-react";

export function TechStack() {
  return (
    <GlassCard className="h-full flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
      <div className="grid grid-cols-3 gap-4">
        <TechItem icon={<Globe className="w-6 h-6" />} label="Next.js" />
        <TechItem icon={<Code2 className="w-6 h-6" />} label="React" />
        <TechItem icon={<Coffee className="w-6 h-6" />} label="Java" />
        <TechItem icon={<Cloud className="w-6 h-6" />} label="AWS" />
        <TechItem icon={<Brain className="w-6 h-6" />} label="Python" />
        <TechItem icon={<Smartphone className="w-6 h-6" />} label="Android" />
      </div>
    </GlassCard>
  );
}

function TechItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors">
      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
