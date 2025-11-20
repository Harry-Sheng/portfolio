import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}) {
  return (
    <div
      className={cn(
        className,
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        rowSpan === 2 && "md:row-span-2"
      )}
    >
      {children}
    </div>
  );
}
