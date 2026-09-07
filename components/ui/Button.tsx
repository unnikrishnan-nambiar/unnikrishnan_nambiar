import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'accent';

const base =
  'inline-flex items-center justify-center gap-1.5 rounded px-5 py-2.5 text-[15px] font-medium transition-colors';

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-ink/90',
  secondary: 'border border-[#DADADA] bg-paper text-ink hover:border-ink',
  accent: 'bg-indigo text-paper hover:bg-indigo-dark',
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
