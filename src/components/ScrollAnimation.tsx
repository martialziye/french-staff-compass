
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-right' | 'slide-left' | 'scale-up';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollAnimation = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });

  const animationClasses = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'slide-right': '-translate-x-10 opacity-0',
    'slide-left': 'translate-x-10 opacity-0',
    'scale-up': 'scale-95 opacity-0',
  };

  const styles = {
    transition: `transform 0.8s ease-out, opacity 0.8s ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? '' : animationClasses[animation],
        'transition-all will-change-transform will-change-opacity',
        className
      )}
      style={styles}
    >
      {children}
    </div>
  );
};
