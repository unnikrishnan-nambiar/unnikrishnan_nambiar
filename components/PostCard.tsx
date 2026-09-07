import type { Post } from '@/data/posts';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white/60 p-6 transition hover:border-gold/60 hover:bg-white sm:p-7">
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
        {formatDate(post.date)}
      </p>
      <h3 className="mt-2 text-xl font-semibold leading-snug">{post.title}</h3>
      <p className="mt-2 text-ink/70">{post.summary}</p>
    </article>
  );
}
