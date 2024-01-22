//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

// Developer settings
const DEV_TRANSPARENT_IMAGES = false;
const DEV_MAIL_FORM_API_COOLDOWN = 600;

// DO NOT TOUCH
const isDev = process.env.NODE_ENV === "development";
export const TRANSPARENT_IMAGES = isDev ? DEV_TRANSPARENT_IMAGES : false;
export const MAIL_FORM_API_COOLDOWN = isDev ? 0 : DEV_MAIL_FORM_API_COOLDOWN;
