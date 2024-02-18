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
