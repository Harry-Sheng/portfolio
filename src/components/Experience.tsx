import { GlassCard } from "./GlassCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading the frontend team, building scalable web applications.",
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Developed full-stack features using Node.js and React.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Web Agency",
    period: "2018 - 2020",
    description: "Built responsive websites for various clients.",
  },
];

export function Experience() {
  return (
    <GlassCard className="h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5" />
        Experience
      </h2>
      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-4 border-l-2 border-white/20">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
              {exp.period}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <div className="text-purple-600 dark:text-purple-400 text-xs font-medium mb-1">
              {exp.company}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
