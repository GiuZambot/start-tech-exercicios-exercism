//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (frase) => {
    const palavras = frase.split(' ');
    const palavrasSet = new Set(palavras);
    return palavrasSet;
};