import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

/**
 * A function to merge strings of CSS classes together.
 * @param inputs Array of CSS classes.
 * @returns CSS classes merged.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Make boolean from a string.
 * @param string A string to test.
 * @returns True if the string is true.
 */
export function isTrue(string: string) : boolean {
  return string.toLowerCase() === "true";
}
