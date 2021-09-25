class Leap {
  bool leapYear(int anoAVerificar) {
    bool divisivelPor4 = anoAVerificar % 4 == 0;
    bool divisivelPor100 = anoAVerificar % 100 == 0;
    bool divisivelPor400 = anoAVerificar % 400 == 0;
    bool ehBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400;
    return ehBissexto;
  }
}

void main() {
  final leap = Leap();
  print(leap.leapYear(2000)); // true
  print(leap.leapYear(2001)); // false
}
