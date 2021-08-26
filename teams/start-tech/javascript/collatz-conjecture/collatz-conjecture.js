export const steps = (numero) => {
    if (numero < 1) throw new Error('Only positive numbers are allowed');
    let steps = 0;
    // Se for par divide por 2, se for ímpar multiplica por três
    while (numero > 1) {
        numero = !(numero % 2) ? numero / 2 : numero * 3 + 1;
        steps++;
    }
    return steps;
};