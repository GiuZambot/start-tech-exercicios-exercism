export const square = (qtdade) => {
  if (qtdade < 1 || qtdade > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return BigInt(2 ** --qtdade);
};

export const total = () => {
  // Por matemática
  let somaDeGraos = BigInt(2 * (2 ** 63)) - 1n;
  return somaDeGraos;
};