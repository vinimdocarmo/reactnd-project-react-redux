export default store => next => action => {
  console.group(action.type);
  console.log(action);

  const returnValue = next(action);

  console.log("state after dispatch ", store.getState());
  console.groupEnd();

  return returnValue;
};
