import 'dart:math';

class DifferenceOfSquares {
  int squareOfSum(int tamanho) {
    final conjunto = [for (var i = 1; i <= tamanho; i += 1) i];
    final somaNumerais = conjunto.reduce((acc, n) => acc + n);
    return pow(somaNumerais, 2).round();
  }

  int sumOfSquares(int tamanho) {
    final conjunto = [for (var i = 1; i <= tamanho; i += 1) pow(i, 2)];
    final somaNumerais = conjunto.reduce((acc, n) => acc + n);
    return somaNumerais.round();
  }

  int differenceOfSquares(int tamanho) {
    return this.squareOfSum(tamanho) - this.sumOfSquares(tamanho);
  }
}
