import SectionLabel from './SectionLabel';

type SectionIntroProps = {
  label?: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

export default function SectionIntro({
  label,
  heading,
  description,
  className = '',
}: SectionIntroProps) {
  return (
    <div className={`mx-auto max-w-[750px] text-center ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="mt-3 font-display text-[34px] font-semibold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
        {heading}
      </h2>
      {description && (
        <div className="mx-auto mt-3 max-w-[650px] text-lg leading-[1.5] text-ink-secondary">
          {description}
        </div>
      )}
    </div>
  );
}
