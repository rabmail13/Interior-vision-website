import React, { ReactNode } from 'react';

interface ScrollSectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  backgroundContent?: ReactNode;
  foregroundContent?: ReactNode;
  contentAlignment?: 'left' | 'center' | 'right';
  contentLayout?: 'default' | 'split' | 'split-reverse';
  parallaxBackground?: boolean;
  parallaxBackgroundSpeed?: number;
  parallaxForeground?: boolean;
  parallaxForegroundSpeed?: number;
  backgroundColor?: string;
  backgroundImage?: string;
}

/**
 * ScrollSection Component
 * A full-screen section with 3 layers: background, content, and foreground
 */
export default function ScrollSection({
  id,
  className = '',
  children,
  backgroundContent,
  foregroundContent,
  contentAlignment = 'left',
  contentLayout = 'default',
  parallaxBackground = false,
  parallaxBackgroundSpeed = 0.3,
  parallaxForeground = false,
  parallaxForegroundSpeed = -0.2,
  backgroundColor,
  backgroundImage,
}: ScrollSectionProps) {
  const sectionClasses = `section ${className}`.trim();
  const contentClasses = `section-content align-${contentAlignment} ${
    contentLayout !== 'default' ? contentLayout : ''
  }`.trim();

  const backgroundStyle: React.CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }),
  };

  return (
    <section id={id} className={sectionClasses}>
      {/* Background Layer */}
      <div
        className="section-background"
        style={backgroundStyle}
        {...(parallaxBackground && {
          'data-parallax': 'slow',
          'data-speed': parallaxBackgroundSpeed.toString(),
        })}
      >
        {backgroundContent}
      </div>

      {/* Content Layer */}
      <div className={contentClasses}>
        {children}
      </div>

      {/* Foreground Layer */}
      {(foregroundContent || parallaxForeground) && (
        <div
          className="section-foreground"
          {...(parallaxForeground && {
            'data-parallax': 'fast',
            'data-speed': parallaxForegroundSpeed.toString(),
          })}
        >
          {foregroundContent}
        </div>
      )}
    </section>
  );
}

/**
 * Helper components for common section patterns
 */

interface SectionContentProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string | ReactNode;
  cta?: ReactNode;
  stagger?: boolean;
}

export function SectionContent({ eyebrow, title, subtitle, body, cta, stagger = true }: SectionContentProps) {
  const containerProps = stagger ? { 'data-animate-stagger': true } : {};

  return (
    <div {...containerProps}>
      {eyebrow && (
        <span className="section-eyebrow" data-animate="fade-up">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title" data-animate="fade-up">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle" data-animate="fade-up">
          {subtitle}
        </p>
      )}
      {body && (
        <div className="section-body" data-animate="fade-up">
          {typeof body === 'string' ? <p>{body}</p> : body}
        </div>
      )}
      {cta && (
        <div data-animate="fade-up">
          {cta}
        </div>
      )}
    </div>
  );
}

interface SplitSectionContentProps {
  textColumn: ReactNode;
  mediaColumn: ReactNode;
}

export function SplitSectionContent({ textColumn, mediaColumn }: SplitSectionContentProps) {
  return (
    <>
      <div className="text-column" data-animate-stagger>
        {textColumn}
      </div>
      <div className="media-column" data-animate="slide-right">
        {mediaColumn}
      </div>
    </>
  );
}
