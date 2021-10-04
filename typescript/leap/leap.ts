export function isLeap(anoAVerificar: number): boolean {
  const ehDivisivelPor4: boolean = !(anoAVerificar % 4); // ano é divisível por 4
  const ehDivisivelPor100: boolean = !(anoAVerificar % 100); // ano é divisível por 100
  const ehDivisivelPor400: boolean = !(anoAVerificar % 400); // ano é divisível por 400
  const ehBissexto: boolean = ehDivisivelPor400 || ehDivisivelPor4 && !ehDivisivelPor100; // regras bissexto
  return ehBissexto;
}
