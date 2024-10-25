const auth = "auth/";
const price = "price";
const settings = "settings/"
const courses = "courses";
const transaction = "transactions/";

export const endpoints = {
  auth: {
    login: `${auth}login`,
    register: `${auth}register`,
    "refresh-token": `${auth}refresh-token/`,
    verify: "auth/token",
  },
  courses: {
    courses,
    whitelisted: `${courses}/whitelisted`,
    whiteList: `${courses}/whitelist`,
    unWhiteList: `${courses}/unWhitelist`,
    view: {
      details: "",
      stream: "",
    },
    registered: `${courses}/registered`,
    price: {
      price: `${courses}/${price}`,
      currency: `${price}/currency`
    },
  },
  dashboard: "dashboard",
  settings: {
    profile: `${settings}profile`,
    "update-profile": `${settings}profile-update`,
    "change-password": `${settings}change-password`
  },
  transaction: {
    paystack: {
      init:  `${transaction}init-payment/`,
      initiate: `${transaction}make-payment`,
      verify: `${transaction}verify-payment`,
    }
  }
};
