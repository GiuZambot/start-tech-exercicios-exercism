/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (qtdade) => {
    if (qtdade < 1 || qtdade > 64) {
        throw new Error("square must be between 1 and 64");
    }
    return BigInt(2 ** --qtdade);
};

export const total = () => {
    // Por for
    // let somaDeGraos = BigInt(0);
    // for (let n = 0; n < 64; n++) {
    //     somaDeGraos += BigInt(2 ** n);
    // }

    // Por matemática
    let somaDeGraos = BigInt(2 * (2 ** 63)) - BigInt(1);

    // Dá erro, não subtrai o último 1
    //let somaDeGraos = BigInt((2 * (2 ** 63)) - (1));

    return somaDeGraos;
};