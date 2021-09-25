import 'dart:math';

class ArmstrongNumbers {
  bool isArmstrongNumber(int aNumber) {
    String numberString = aNumber.toString();
    num soma = 0;
    for (var i = 0; i < numberString.length; i++) {
      int myInt = int.parse(numberString[i]);
      soma += pow(myInt, numberString.length);
    }
    return aNumber == soma;
  }
}
