export const countWords = (frase) => {
    const palavrasArr = frase.
    toLowerCase().
    replace(/\b'\b/g, 'A').
    replace('\n', '').
    split(/\W+/g).
    filter(x => x).
    join(" ").
    replace(/A/g, "'").
    split(" ");

    const wordCount = {};
    palavrasArr.map(x => wordCount[x] = (x in wordCount) ? wordCount[x] + 1 : 1);
    return wordCount;
};