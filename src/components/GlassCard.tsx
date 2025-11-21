import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import * as motion from "framer-motion/client";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  noHover?: boolean;
}

export function GlassCard({ children, className, noHover = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={!noHover ? { scale: 1.02 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-black/10 hover:bg-white/15 dark:hover:bg-black/15",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
