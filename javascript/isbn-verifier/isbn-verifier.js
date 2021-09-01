export const isValid = (isbn) => {
  const isbnStr = isbn.match(/\d|X$/g);

  // Número tamanho errado
  if (!isbnStr || isbnStr.length != 10) return false;

  let somaValida = 0; // Soma para validação
  for (let i = 0; i < 9; i++) {
    somaValida += +(isbnStr[i]) * (10 - i);
  }

  // Soma do ultimo dígito
  somaValida += isbnStr[9] === 'X' ? 10 : +(isbnStr[9]);

  // Válido se módulo de 11 = 0
  return !(somaValida % 11);
};