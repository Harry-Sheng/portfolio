import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { Experience } from "@/components/Experience";
import { GlassCard } from "@/components/GlassCard";
import { LocationCard } from "@/components/LocationCard";
import { BioCard, ProfileHeader, SocialsCard } from "@/components/Profile";
import { TechStack } from "@/components/TechStack";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <BentoGrid>
        {/* Top Left: Profile Header (Large) */}
        <BentoItem colSpan={2} rowSpan={2}>
          <ProfileHeader />
        </BentoItem>

        {/* Top Right: Socials & Blog Link */}
        <BentoItem>
          <SocialsCard />
        </BentoItem>
        <BentoItem>
          <Link href="/blog" className="block h-full">
            <GlassCard className="h-full flex flex-col items-center justify-center text-center group hover:bg-purple-500/20 transition-colors">
              <BookOpen className="w-8 h-8 mb-2 text-purple-500 group-hover:scale-110 transition-transform" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Blog
              </h2>
              <ArrowRight className="w-4 h-4 mt-2 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </GlassCard>
          </Link>
        </BentoItem>

        {/* Middle: Experience & Tech Stack */}
        <BentoItem colSpan={2} rowSpan={2}>
          <Experience />
        </BentoItem>
        <BentoItem colSpan={2}>
           <TechStack />
        </BentoItem>

        {/* Bottom: Location & Bio */}
        <BentoItem colSpan={2}>
          <LocationCard />
        </BentoItem>
        <BentoItem colSpan={2}>
          <BioCard />
        </BentoItem>
      </BentoGrid>
    </main>
  );
}
