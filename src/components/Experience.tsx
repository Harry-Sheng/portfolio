"use client";

import { GlassCard } from "./GlassCard";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "WDCC, University of Auckland",
    period: "Mar 2025 - Nov 2025",
    description: "Led a 10-person student development team to build a Next.js website streamlining club operations for a chamber orchestra, transforming client requirements into actionable roadmaps while conducting weekly help sessions to ensure timely delivery.",
  },
  {
    id: 2,
    role: "Teaching Assistant",
    company: "University of Auckland",
    period: "Mar 2025 - Nov 2025",
    description: "Mentored CS101 and CS130 students through weekly Python tutorials, providing guidance and clarifying algorithmic principles.",
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "The NZPMC Ltd.",
    period: "Nov 2024 - Feb 2025",
    description: "Developed a full-stack academic competition platform serving 800+ students, reducing manual marking time by 90% and average response time by 38% through multiple Java Spring Boot APIs, React frontend, AWS cloud services, and caching optimisation.",
  },
  {
    id: 4,
    role: "Undergraduate Machine Learning Researcher",
    company: "University of Auckland",
    period: "Feb 2024 - Nov 2024",
    description: "Developed Python automation tools to assess LLM planning robustness, uncovering significant vulnerabilities in GPT-4o's multi-step reasoning capabilities through adversarial testing in simulated environments.",
  },
  {
    id: 5,
    role: "Summer Research Assistant",
    company: "University of Auckland",
    period: "Nov 2023 - Feb 2024",
    description: "Contributed to IEEE research on Android app security by implementing data collection pipelines and supporting the retrieval of 100+ native libraries addressing critical dataset gaps for mobile security analysis.",
  },
];

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const isNavigating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const next = () => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setTimeout(() => {
      isNavigating.current = false;
    }, 500);
  };

  const prev = () => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    setTimeout(() => {
      isNavigating.current = false;
    }, 500);
  };

  const goTo = (idx: number) => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    setTimeout(() => {
      isNavigating.current = false;
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Use direct DOM event listener for wheel to allow preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Detect horizontal scroll (two-finger swipe on trackpad)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
        e.preventDefault();
        
        // Clear existing timeout
        if (wheelTimeout.current) {
          clearTimeout(wheelTimeout.current);
        }

        // Debounce the wheel event
        wheelTimeout.current = setTimeout(() => {
          if (e.deltaX > 0) {
            next();
          } else if (e.deltaX < 0) {
            prev();
          }
        }, 50);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <GlassCard className="h-[400px] md:h-[450px] flex flex-col relative group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Experience
        </h2>
        <div className="flex gap-1">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-1 rounded-full hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-1 rounded-full hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Next experience"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="h-full flex flex-col justify-center select-none"
          >
            <div className="inline-flex self-start px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3 border border-blue-500/20">
              {experiences[currentIndex].period}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {experiences[currentIndex].role}
            </h3>
            <div className="text-base font-medium text-gray-600 dark:text-gray-300 mb-4">
              {experiences[currentIndex].company}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {experiences[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {experiences.map((_, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.2 }}
            onClick={() => goTo(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-blue-500 w-4"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
            }`}
            aria-label={`Go to experience ${idx + 1}`}
          />
        ))}
      </div>
    </GlassCard>
  );
}
