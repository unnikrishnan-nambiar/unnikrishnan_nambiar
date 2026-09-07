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
    <article className="rounded-2xl border border-hairline p-6 transition hover:border-gold sm:p-7">
      <p className="text-sm font-medium text-gold-dark">{formatDate(post.date)}</p>
      <h3 className="mt-2 font-display text-xl font-bold leading-snug">{post.title}</h3>
      <p className="mt-2 text-ink-soft">{post.summary}</p>
    </article>
  );
}
