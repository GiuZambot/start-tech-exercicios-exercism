enum RnaMap {
  C = 'G',
  G = 'C',
  T = 'A',
  A = 'U',
}

export function toRna(dna: string): string {
  const dnaArr: string[] = dna.split('');
  const traduzida: string = dnaArr.map(key => RnaMap[key as keyof typeof RnaMap]).join('');
  if (traduzida.length !== dna.length) throw new Error('Invalid input DNA.');
  return traduzida;
}