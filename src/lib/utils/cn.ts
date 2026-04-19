import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge for better Tailwind CSS handling
 * Use this instead of plain string concatenation for className props
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}