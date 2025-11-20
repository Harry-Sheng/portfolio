import { GlassCard } from "@/components/GlassCard";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="max-w-3xl mx-auto space-y-8">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>

      <div className="grid gap-6">
        {allPostsData.map(({ id, date, title }) => (
          <Link key={id} href={`/blog/${id}`}>
            <GlassCard className="hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {date}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
            </GlassCard>
          </Link>
        ))}
      </div>
    </main>
  );
}
