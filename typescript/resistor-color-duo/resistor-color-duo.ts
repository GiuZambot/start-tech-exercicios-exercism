enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
};

export function decodedValue([cor1, cor2]: any): number {
  const dezena: number = +Colors[cor1];
  const unidade: number = +Colors[cor2];
  return dezena * 10 + unidade;
}