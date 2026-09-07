import { posts } from '@/data/posts';
import PostCard from './PostCard';

export default function Latest() {
  return (
    <section id="latest" className="section py-16 sm:py-20">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">Latest</h2>
      <div className="mt-8 grid gap-4 sm:gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-soft">More every week.</p>
    </section>
  );
}
