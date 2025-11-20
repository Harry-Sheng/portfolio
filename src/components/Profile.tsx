import { GlassCard } from "./GlassCard";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <GlassCard className="h-full flex flex-col justify-center items-center text-center p-8">
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 animate-pulse blur-lg opacity-50"></div>
        <Image
          src="/placeholder-avatar.svg"
          alt="Profile"
          width={160}
          height={160}
          className="relative rounded-full border-4 border-white/30 object-cover shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Harry
      </h1>
      <h2 className="mt-2 text-xl font-medium text-gray-600 dark:text-gray-300">
        Software Engineer & Researcher
      </h2>
    </GlassCard>
  );
}

export function BioCard() {
  return (
    <GlassCard className="h-full flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Specializing in full-stack development, machine learning, and security. 
        Building robust platforms and exploring AI vulnerabilities.
      </p>
    </GlassCard>
  );
}

export function SocialsCard() {
  return (
    <GlassCard className="h-full flex items-center justify-center gap-4 flex-wrap">
      <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} label="GitHub" />
      <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
      <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
      <SocialLink href="mailto:hello@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
    </GlassCard>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-gray-700 dark:text-gray-200 transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
