import { GlassCard } from "@/components/GlassCard";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <main className="max-w-3xl mx-auto space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <GlassCard>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="mb-2">{postData.title}</h1>
          <div className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
            {postData.date}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
        </article>
      </GlassCard>
    </main>
  );
}
