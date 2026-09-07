type LogoProps = {
  className?: string;
  variant?: 'ink' | 'offwhite';
};

// Recreated wordmark, standing in for the supplied logo artwork (a lowercase
// "ryx ai" mark with a looped descender on the "y"). Swap the <text> below
// for an <image>/<use> of the real file once it's dropped into /public.
export default function Logo({ className = '', variant = 'ink' }: LogoProps) {
  const fill = variant === 'offwhite' ? '#F8F6F1' : '#17171A';

  return (
    <svg
      viewBox="0 0 130 40"
      className={className}
      role="img"
      aria-label="ryx ai"
    >
      <text
        x="0"
        y="29"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="-0.5"
        fill={fill}
      >
        ryx ai
      </text>
    </svg>
  );
}
