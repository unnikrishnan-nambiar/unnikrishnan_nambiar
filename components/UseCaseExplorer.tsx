'use client';

import { useState } from 'react';
import UseCaseCard from './UseCaseCard';
import { categories, useCases, type Category } from '@/data/useCases';

type Filter = 'All' | Category;

export default function UseCaseExplorer() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...categories];
  const shown = filter === 'All' ? useCases : useCases.filter((u) => u.category === filter);

  return (
    <div>
      <div role="tablist" aria-label="Filter use cases" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === 'All' ? useCases.length : useCases.filter((u) => u.category === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                active
                  ? 'border-fg bg-fg text-night'
                  : 'border-line-strong text-muted hover:border-white/40 hover:text-fg'
              }`}
            >
              {f} <span className={active ? 'text-night/50' : 'text-subtle'}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((u) => (
          <UseCaseCard key={u.slug} useCase={u} />
        ))}
      </div>
    </div>
  );
}
