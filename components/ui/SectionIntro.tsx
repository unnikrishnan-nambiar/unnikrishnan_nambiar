import SectionLabel from './SectionLabel';

type SectionIntroProps = {
  label?: string;
  labelColor?: 'ink' | 'violet' | 'pink' | 'cyan' | 'amber';
  heading: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

export default function SectionIntro({
  label,
  labelColor = 'ink',
  heading,
  description,
  className = '',
}: SectionIntroProps) {
  return (
    <div className={`mx-auto max-w-[850px] text-center ${className}`}>
      {label && <SectionLabel color={labelColor}>{label}</SectionLabel>}
      <h2 className="mt-4 font-display text-[38px] font-bold leading-[1.05] tracking-tight sm:text-[48px] lg:text-[60px]">
        {heading}
      </h2>
      {description && (
        <div className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.5] text-ink-secondary">
          {description}
        </div>
      )}
    </div>
  );
}
