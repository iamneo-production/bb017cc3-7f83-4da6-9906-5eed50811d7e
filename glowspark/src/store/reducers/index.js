import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import servicesReducers from "./servicesReducers";
import accountReducer from "./accountReducer";
import userDataReducer from "./userDataReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  services: servicesReducers,
  form: formReducer,
  userData: userDataReducer,
  account: accountReducer
});