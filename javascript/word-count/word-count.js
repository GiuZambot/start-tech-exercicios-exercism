export const countWords = (frase) => {
  const palavrasArr = frase.
    toLowerCase().
    split(/\s|'\B|\B'|\\n|[.,:!!&@$%^&]/g).
    filter(x => x);

  const wordCount = { };
  palavrasArr.map(x => wordCount[x] = (x in wordCount) ? wordCount[x] + 1 : 1);
  return wordCount;
};