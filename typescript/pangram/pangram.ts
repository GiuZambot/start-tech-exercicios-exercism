export function isPangram(frase: string): boolean {
  if (!frase) return false;

  const fraseLowerCase: string = frase.toLowerCase();
  const fraseSet: number = new Set(fraseLowerCase.replace(/[^a-z]/g, "").split('')).size;
  return fraseSet === 26;
}