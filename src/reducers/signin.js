export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = username => ({
  type: SIGN_IN,
  username
});

export const signOut = () => ({
  type: SIGN_OUT
});

export default function handleSignIn(
  state = { isLoggedIn: false, username: null },
  action
) {
  switch (action.type) {
    case SIGN_IN:
      return { isLoggedIn: true, username: action.username };
    case SIGN_OUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
}
