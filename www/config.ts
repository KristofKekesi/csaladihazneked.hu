//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

// Settings
const SETTINGS_API_FETCH_REVALIDATE = 600;

// Developer settings
const DEV_TRANSPARENT_IMAGES = false;

// DO NOT TOUCH
const isDev = process.env.NODE_ENV === "development";
export const TRANSPARENT_IMAGES = isDev ? DEV_TRANSPARENT_IMAGES : false;
export const API_FETCH_REVALIDATE = isDev ? 0 : SETTINGS_API_FETCH_REVALIDATE;
