export const isArmstrongNumber = (numero) => {
    const string = `${numero}`;
    let soma = 0;
    // Numero de Armstrong = cada elelemento elevado ao número de elementos
    for (let i = 0; i < string.length; i++) {
        soma += parseInt(string[i]) ** string.length;
    }
    return numero === soma;
};