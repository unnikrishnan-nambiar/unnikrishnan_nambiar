import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'light' | 'ghost';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300 ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-[0_10px_40px_-12px_rgba(61,90,254,0.8)] hover:bg-accent-bright',
  secondary: 'border border-line-strong bg-white/[0.03] text-fg hover:border-white/40 hover:bg-white/[0.07]',
  light: 'bg-fg text-night hover:bg-white',
  ghost: 'px-0 py-0 text-fg hover:text-accent-bright',
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
  arrow?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
  arrow?: boolean;
};

function Arrow() {
  return (
    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
      →
    </span>
  );
}

export default function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className = '', arrow = false, children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkProps;

    // Internal path (starts with "/") — use next/link so GitHub Pages'
    // basePath gets applied automatically. Plain <a href="/ferry"> would
    // ship that literal string with no prefix and 404 once deployed under
    // a repo subpath. External URLs, mailto: and tel: stay plain <a> tags.
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {content}
    </button>
  );
}
