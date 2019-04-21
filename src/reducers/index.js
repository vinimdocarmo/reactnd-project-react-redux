import { combineReducers } from "redux";
import signin from "./signin";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  signin,
  users,
  questions
});
