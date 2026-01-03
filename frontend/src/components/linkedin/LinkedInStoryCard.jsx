import { ArrowUpRight, Linkedin } from "lucide-react";

export default function LinkedInStoryCard({ post }) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
      {post.image && (
        <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-blue-400">
          <Linkedin size={14} />
          <span className="text-xs font-bold uppercase">LinkedIn</span>
        </div>

        <h3 className="text-xl font-black mb-2">{post.title}</h3>
        <p className="text-sm text-neutral-400 mb-4">{post.summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.themes?.map(t => (
            <span key={t} className="text-xs px-2 py-1 border rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a
          href={post.originalLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-blue-400"
        >
          Read post <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
