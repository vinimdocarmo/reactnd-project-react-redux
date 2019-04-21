export const orderBy = (collection, expression) => {
  const [prop, order] = expression.split(" ");

  return collection.sort((a, b) => {
    if (order === "DESC") {
      return b[prop] - a[prop];
    } else if (order === "ASC") {
      return a[prop] - b[prop];
    }

    throw new Error("order not allowed");
  });
};
