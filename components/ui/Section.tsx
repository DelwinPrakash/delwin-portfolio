import React from 'react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ className, fullWidth = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    'py-16 md:py-24',
                    !fullWidth && 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = 'Section';
