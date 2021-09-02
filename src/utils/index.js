export const handleSumTotal = (cart) => {
  const sum = cart.reduce((accum, { price }) => accum + price, 0);

  return sum;
};
