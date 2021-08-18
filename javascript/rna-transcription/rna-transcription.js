export const toRna = (dna) => {
    if (!dna)
        return '';
    const dnaArr = dna.split('');
    return dnaArr.map(n => translateMap[n]).join('');
};

const translateMap = {
    'C': "G",
    'G': "C",
    'T': "A",
    'A': "U"
};