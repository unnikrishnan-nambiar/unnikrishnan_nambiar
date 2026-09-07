import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'dark' | 'light';

const base =
  'inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-200';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-violet to-pink text-paper shadow-glow-violet hover:-translate-y-0.5 hover:shadow-glow-pink',
  accent:
    'bg-gradient-to-r from-cyan to-violet text-paper shadow-glow-cyan hover:-translate-y-0.5 hover:shadow-glow-violet',
  secondary:
    'rounded-2xl border-[2.5px] border-ink bg-paper text-ink hover:bg-ink hover:text-paper',
  dark: 'bg-ink text-paper hover:bg-ink/85',
  light: 'bg-paper text-ink shadow-hard hover:-translate-y-0.5',
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
