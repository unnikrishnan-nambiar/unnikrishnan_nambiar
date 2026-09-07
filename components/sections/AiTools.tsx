'use client';

import { useMemo, useState } from 'react';
import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';
import { tools, toolCategories } from '@/data/tools';
import type { Tool } from '@/data/tools';

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-card border border-border bg-paper p-6 text-left transition-colors hover:border-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-card font-display text-sm font-semibold"
        >
          {tool.name.charAt(0)}
        </span>
        {tool.pick && <Badge variant="indigo">RYX AI Pick</Badge>}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold">{tool.name}</h3>
      <p className="mt-1 text-ink-secondary">{tool.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <Badge>{tool.category}</Badge>
        <span className="text-sm font-medium text-ink-secondary group-hover:text-ink">
          Visit
        </span>
      </div>
    </a>
  );
}

export default function AiTools() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = category === 'All' || tool.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === '' ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="tools" className="container-content scroll-mt-20 py-10 sm:py-16">
      <Reveal>
        <SectionIntro
          label="Tools"
          heading="Find AI worth trying."
          description={
            <div className="space-y-1">
              <p>There are thousands of AI tools.</p>
              <p>You don&apos;t need thousands. You need the right ones.</p>
            </div>
          }
        />
      </Reveal>

      <div className="mx-auto mt-6 max-w-content">
        <label htmlFor="tool-search" className="sr-only">
          Search tools
        </label>
        <input
          id="tool-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools…"
          className="w-full rounded border border-border bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 sm:max-w-sm"
        />

        <ul className="mt-4 flex flex-wrap gap-2">
          {['All', ...toolCategories].map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded border px-3 py-1 text-sm font-medium transition-colors ${
                  category === c
                    ? 'border-ink bg-ink text-paper'
                    : 'border-border bg-paper text-ink-secondary hover:border-ink hover:text-ink'
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, i) => (
              <Reveal key={tool.slug} delay={i * 0.05}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-ink-muted">No tools match that search yet.</p>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Button href="/tools" variant="secondary">
          Explore Tools
        </Button>
      </div>
    </section>
  );
}
