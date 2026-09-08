import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'accent' | 'dark' | 'light';

const base =
  'inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 active:duration-100';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-violet to-pink text-paper shadow-glow-violet hover:shadow-glow-pink',
  accent:
    'bg-gradient-to-r from-cyan to-violet text-paper shadow-glow-cyan hover:shadow-glow-violet',
  secondary:
    'rounded-2xl border-[2.5px] border-ink bg-paper text-ink hover:bg-ink hover:text-paper',
  dark: 'bg-ink text-paper hover:bg-ink/85',
  light: 'bg-paper text-ink shadow-hard hover:shadow-lg',
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
};

export default function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className = '', ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkProps;

    // Internal path (starts with "/", e.g. "/tools", "/#discover") — use
    // next/link so GitHub Pages' basePath gets applied automatically.
    // Plain <a href="/tools"> would ship that literal string with no
    // prefix and 404 once deployed under a repo subpath. External URLs,
    // mailto:, and same-page "#hash" links don't need that, so they stay
    // plain <a> tags.
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {props.children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {props.children}
      </a>
    );
  }

  const buttonRest = rest as ButtonProps;
  return (
    <button className={classes} {...buttonRest}>
      {props.children}
    </button>
  );
}
