import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely extracts the first initial from a name.
 * e.g., "Adi Shankara" -> "A"
 * @param name The full name to process.
 * @returns A single initial or an empty string if input is invalid.
 */
export function getInitials(name: unknown): string {
  if (typeof name !== 'string' || name.trim() === '') {
    return '';
  }

  const firstInitial = name.trim().split(' ')[0]?.[0] || '';

  return firstInitial.toUpperCase();
}

/**
 * Safely truncates a string to a specified length and adds an ellipsis.
 * Handles non-string, null, or undefined inputs gracefully.
 * @param text The input to truncate.
 * @param limit The character limit. Defaults to 25.
 * @returns The truncated string or an empty string if the input is invalid.
 */
export function truncateText(text: unknown, limit: number = 25): string {
  if (typeof text !== 'string' || text.trim() === '') {
    return '';
  }

  if (text.length <= limit) {
    return text;
  }

  return text.slice(0, limit) + '...';
}
