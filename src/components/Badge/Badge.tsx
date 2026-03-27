import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Rounded style */
  rounded?: boolean;
  /** Show dot indicator */
  dot?: boolean;
  /** Show remove button */
  removable?: boolean;
  /** Called when remove button is clicked */
  onRemove?: () => void;
}

/**
 * Badge component for status indicators and labels
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', rounded = false, dot = false, removable = false, onRemove, children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-100 text-gray-800',
      primary: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-cyan-100 text-cyan-800',
    };

    const dotColors = {
      default: 'bg-gray-500',
      primary: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
      info: 'bg-cyan-500',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium',
          rounded ? 'rounded-full' : 'rounded',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span className={cn('inline-block h-1.5 w-1.5 rounded-full mr-1.5', dotColors[variant])} />
        )}
        {children}
        {removable && (
          <button
            type="button"
            className="ml-1 inline-flex items-center hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
            aria-label="Remove"
          >
            &times;
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
