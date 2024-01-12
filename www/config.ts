//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

// Developer settings
const DEV_TRANSPARENT_IMAGES = false;

// Secrets, DO NOT TOUCH
export const HOST = process.env.NEXT_PUBLIC_HOST;

// DO NOT TOUCH
const isDev = process.env.NODE_ENV === "development";
export const TRANSPARENT_IMAGES = isDev ? DEV_TRANSPARENT_IMAGES : false;