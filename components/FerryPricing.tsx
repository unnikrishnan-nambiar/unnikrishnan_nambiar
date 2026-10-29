import Button from './ui/Button';
import { ferryPlans } from '@/data/ferry';

export default function FerryPricing() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {ferryPlans.map((plan) => {
        const soon = plan.status === 'coming-soon';
        return (
          <div
            key={plan.name}
            className={`relative flex flex-col overflow-hidden rounded-card border p-7 sm:p-9 ${
              soon ? 'border-line bg-surface' : 'border-accent/50 bg-gradient-to-b from-accent/[0.16] to-surface'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{plan.name}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  soon ? 'border border-line-strong text-muted' : 'bg-accent text-white'
                }`}
              >
                {soon ? 'Coming soon' : 'Early access open'}
              </span>
            </div>
            <p className="mt-3 text-muted">{plan.summary}</p>

            <div className="mt-8 flex items-baseline gap-2">
              {!soon && <span className="text-sm text-subtle">from</span>}
              <span className="font-display text-6xl font-semibold tracking-[-0.04em]">{plan.price}</span>
              <span className="text-sm text-subtle">/month</span>
            </div>

            <ul className="mt-8 space-y-3 border-t border-line pt-7 text-[15px]">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <span aria-hidden className="mt-0.5 text-accent-bright">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-9">
              <Button
                href={soon ? '/contact?interest=ferry-premium#early-access' : '/contact?interest=ferry#early-access'}
                variant={soon ? 'secondary' : 'primary'}
                className="w-full"
                arrow
              >
                {soon ? 'Join the waitlist' : 'Get early access'}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
