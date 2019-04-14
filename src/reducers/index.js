import { combineReducers } from "redux";
import signin from "./signin";
import users from "./users";

export default combineReducers({
  signin: signin,
  users: users
});
