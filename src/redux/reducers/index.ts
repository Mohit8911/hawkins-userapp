/* eslint-disable */
import { combineReducers, Action } from "redux";
import auth, { AuthState } from "./auth";
import settings, { SettingsState } from "./settings";
import cart, { CartState } from "./cart";

export interface RootState {
  auth: AuthState;
  settings: SettingsState; // Update with the type of settings state
  cart: CartState;
}
const appReducer = combineReducers({
  auth,
  settings,
  cart,
});
const rootReducer = (state: RootState | undefined, action: Action<any>) => {
  return appReducer(state, action);
};
export default rootReducer;