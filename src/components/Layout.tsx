import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-purple-900 dark:mix-blend-soft-light"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-yellow-900 dark:mix-blend-soft-light" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-pink-900 dark:mix-blend-soft-light" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
