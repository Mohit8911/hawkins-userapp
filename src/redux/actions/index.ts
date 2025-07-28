
import * as auth from "./auth";
import * as home from "./home";
import * as settings from "./settings";
import * as cart from "./cart";

export default {
  ...auth,
  ...home,
  ...settings,
  ...cart,
};
