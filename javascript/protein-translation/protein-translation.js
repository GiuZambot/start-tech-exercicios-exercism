// Versão com isStop no objeto
export const translate = (rna) => {
  // Rna vazio retona uma array vazia  
  if (!rna) return [];

  // Divide o RNA em Codons, divide a String em grupos de 3 caracteres

  // Com slipt e regex
  //const codons = rna.split(/(\w{3})/).filter(x => x);

  // Com for simples
  const codons = [];
  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna[i] + rna[i + 1] + rna[i + 2]);
  }

  // Converte os codons em nomes de proteínas
  const protein = [];
  for (let codon = 0; codon < codons.length; codon++) {
    if (mapaCP[codons[codon]] === undefined) throw new Error('Invalid codon');
    if (mapaCP[codons[codon]].isStop) break;
    protein.push(mapaCP[codons[codon]].name);
  }

  return protein;
};

const mapaCP = {
  AUG: { isStop: false, name: "Methionine" },
  UUU: { isStop: false, name: "Phenylalanine" },
  UUC: { isStop: false, name: "Phenylalanine" },
  UUA: { isStop: false, name: "Leucine" },
  UUG: { isStop: false, name: "Leucine" },
  UCU: { isStop: false, name: "Serine" },
  UCC: { isStop: false, name: "Serine" },
  UCA: { isStop: false, name: "Serine" },
  UCG: { isStop: false, name: "Serine" },
  UAU: { isStop: false, name: "Tyrosine" },
  UAC: { isStop: false, name: "Tyrosine" },
  UGU: { isStop: false, name: "Cysteine" },
  UGC: { isStop: false, name: "Cysteine" },
  UGG: { isStop: false, name: "Tryptophan" },
  UAA: { isStop: true, name: "UAA" },
  UAG: { isStop: true, name: "UAG" },
  UGA: { isStop: true, name: "UGA" }
};
