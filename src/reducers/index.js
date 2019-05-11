import { combineReducers } from "redux";
import signin from "./signin";
import users from "./users";
import questions from "./questions";
import loading from "./loading";

export default combineReducers({
  signin,
  users,
  questions,
  loading
});
