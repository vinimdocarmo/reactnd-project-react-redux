export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = user => ({
  type: SIGN_IN,
  user
});

export const signOut = () => ({
  type: SIGN_OUT
});

export default function handleSignIn(
  state = { isLoggedIn: false, user: {} },
  action
) {
  switch (action.type) {
    case SIGN_IN:
      return { isLoggedIn: true, user: action.user };
    case SIGN_OUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
}
