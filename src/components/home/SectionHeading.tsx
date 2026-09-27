import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className={cn('section-eyebrow', light && 'text-cyan-300')}>{eyebrow}</p>}
      <h2 className={cn('section-title', light && 'text-white')}>{title}</h2>
      {description && (
        <p className={cn('mt-5 text-base leading-7 text-text-muted sm:text-lg', light && 'text-slate-300')}>
          {description}
        </p>
      )}
    </div>
  );
}

