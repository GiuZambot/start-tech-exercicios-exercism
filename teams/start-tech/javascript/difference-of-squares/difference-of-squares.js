export class Squares {
    constructor(quantidade) {
        // Fiz os calculos no construtor para evitar refazer os calculos nos gets
        // Cria uma array de valores crescentes de 1 a N
        this.numeraisN = Array.from({ length: ++quantidade }, (_, i) => i++);
        this.numeraisN.shift(); // Remove primeiro elemento (zero)

        // Soma todos os elementos do conjunto
        const somaNumerais2 = this.numeraisN.reduce((acc, n) => acc + n);
        // retorna o quadrado da soma do conjunto
        this.squareOfS = somaNumerais2 ** 2;

        // Faz o quadrado de cada elemento
        const squaresArr = this.numeraisN.map(x => x ** 2);
        // Soma todos os elementos do conjunto
        const somaNumerais1 = squaresArr.reduce((acc, n) => acc + n);
        this.sumOfS = somaNumerais1;

        // Retorna a diferença de sumOfSquares menos squareOfSumthis.squareOfSum();
        this.diffS = this.squareOfS - this.sumOfS;
    }

    get sumOfSquares() {
        return this.sumOfS;
    }

    get squareOfSum() {
        return this.squareOfS;
    }

    get difference() {
        return this.diffS;
    }
}