/**
 * Utility function to merge class names
 * Simple implementation - in production use clsx + tailwind-merge
 */
export type ClassValue = string | undefined | null | false;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
