import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper text below input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Left addon element */
  leftAddon?: React.ReactNode;
  /** Right addon element */
  rightAddon?: React.ReactNode;
  /** Whether the field is required (shows asterisk next to label) */
  isRequired?: boolean;
}

/**
 * Accessible form input component
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      size = 'md',
      leftAddon,
      rightAddon,
      isRequired,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const sizes = {
      sm: 'h-8 text-sm px-3',
      md: 'h-10 text-sm px-4',
      lg: 'h-12 text-base px-4',
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative flex">
          {leftAddon && (
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              {leftAddon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'block w-full rounded-md border transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              'disabled:bg-gray-100 disabled:cursor-not-allowed',
              error
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
              sizes[size],
              leftAddon && 'rounded-l-none',
              rightAddon && 'rounded-r-none',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightAddon && (
            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              {rightAddon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
