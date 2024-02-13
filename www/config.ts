//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

// Developer settings
const DEV_TRANSPARENT_IMAGES = false;
const DEV_MAIL_FORM_API_COOLDOWN = 600;
const DEV_API_FETCH_REVALIDATE = 600;

// DO NOT TOUCH
const isDev = process.env.NODE_ENV === "development";
export const TRANSPARENT_IMAGES = isDev ? DEV_TRANSPARENT_IMAGES : false;
export const MAIL_FORM_API_COOLDOWN = isDev ? 0 : DEV_MAIL_FORM_API_COOLDOWN;
export const API_FETCH_REVALIDATE = isDev ? 0 : DEV_API_FETCH_REVALIDATE;
