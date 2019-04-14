import { _getUsers } from "../_DATA";

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";

export const fetchAllUsers = () => dispatch =>
  _getUsers().then(users => dispatch({ type: FETCH_ALL_USERS, users }));

export default function handleSignIn(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}
