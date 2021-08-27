export const parse = (frase) => {
    const acronym = frase.
    toUpperCase().
    replace(/_|\s-/, ''). // Remover _ e - 
    match(/[\w'?]+/g). // pregar somente palavras 
    map(c => c.charAt(0)). // pegar primeir letra
    join('');
    return acronym;
};