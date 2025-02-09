import { notFound } from "next/navigation";
import { blogData } from "@/data/content";

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogData[params.slug];

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start p-10 w-full">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
}