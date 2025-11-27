import React from 'react';
import { cn } from './Button'; // Reusing cn utility

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-gray-900/70 backdrop-blur-sm border border-white/10 shadow-lg rounded-xl p-6 transition-all duration-300',
                    hoverEffect && 'hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
