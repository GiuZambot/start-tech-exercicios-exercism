export class Squares {
  constructor(tamanho) {
    // Cria uma array de valores crescentes de 1 a N
    this.numeraisN = Array.from({ length: ++tamanho }, (_, i) => i++);
    this.numeraisN.shift(); // Remove primeiro elemento (zero)
  }

  get sumOfSquares() {
    // Faz o quadrado de cada elemento
    const squaresArr = this.numeraisN.map(x => x ** 2);
    // Retorna a Soma todos os elementos do conjunto
    return squaresArr.reduce((acc, n) => acc + n);
  }

  get squareOfSum() {
    // Soma todos os elementos do conjunto
    const somaNumerais2 = this.numeraisN.reduce((acc, n) => acc + n);
    // retorna o quadrado da soma do conjunto
    return this.squareOfS = somaNumerais2 ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}