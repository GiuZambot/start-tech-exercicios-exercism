export const isLeap = (anoAVerificar) => {
    const divisivelPor4 = anoAVerificar % 4 === 0; // ano é divisível por 4
    const divisivelPor100 = anoAVerificar % 100 === 0; // ano é divisível por 100
    const divisivelPor400 = anoAVerificar % 400 === 0; // ano é divisível por 400
    const ehBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; // regras bissexto
    return ehBissexto;
};

// A leap year:
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400