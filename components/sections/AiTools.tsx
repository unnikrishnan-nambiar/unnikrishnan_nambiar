import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { tools, toolCategories } from '@/data/tools';
import type { Tool } from '@/data/tools';

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-card border border-border bg-paper p-6 transition-colors hover:border-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-card font-display text-sm font-semibold"
        >
          {tool.name.charAt(0)}
        </span>
        {tool.pick && <Badge variant="indigo">RYX Pick</Badge>}
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
  return (
    <section id="tools" className="container-content py-18 sm:py-28">
      <SectionLabel>04 / Tools</SectionLabel>
      <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
        Find AI worth trying.
      </h2>
      <div className="mt-3 max-w-reading space-y-2 text-lg text-ink-secondary">
        <p>There are thousands of AI tools.</p>
        <p>You don&apos;t need thousands.</p>
        <p>You need the right ones.</p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {toolCategories.map((category) => (
          <li key={category}>
            <Badge>{category}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <div className="mt-10">
        <Button href="/tools" variant="secondary">
          Explore Tools
        </Button>
      </div>
    </section>
  );
}
