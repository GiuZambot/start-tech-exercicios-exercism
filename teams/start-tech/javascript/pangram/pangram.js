export const isPangram = (frase) => {
    if (!frase) return false;

    const fraseLowerCase = frase.toLowerCase();

    const alfabeto = [...
        'abcdefghijklmnopqrstuvwxyz'
    ];

    // Verifica quais letras existem na frase
    alfabeto.map((val, i) => alfabeto[i] = fraseLowerCase.includes(val) ? 1 : 0);

    // Soma quantas letras do alfabetos foram encontradas
    const QtdLetrasAchadas =
        alfabeto.reduce((total, currentElement) => total + currentElement);

    return QtdLetrasAchadas === 26;
};