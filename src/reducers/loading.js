export const LOADING = "LOADING";

export const loading = isLoading => ({
  type: LOADING,
  payload: isLoading
});

export default function handleLoading(state = true, action) {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
}
