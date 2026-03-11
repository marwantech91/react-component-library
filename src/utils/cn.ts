/**
 * Utility function to merge class names
 * Simple implementation - in production use clsx + tailwind-merge
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
