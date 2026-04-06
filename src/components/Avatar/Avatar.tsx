import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function getColorFromName(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-cyan-500',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full overflow-hidden';

  if (src) {
    return (
      <div className={cn(baseClasses, sizeClasses[size], className)}>
        <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (name) {
    const initials = getInitials(name);
    const bgColor = getColorFromName(name);

    return (
      <div className={cn(baseClasses, sizeClasses[size], bgColor, 'text-white font-medium', className)}>
        {initials}
      </div>
    );
  }

  return (
    <div className={cn(baseClasses, sizeClasses[size], 'bg-gray-300 text-gray-600', className)}>
      <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  );
};
