//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrizStr) {
    this.matrizStr = matrizStr;
    this.rowsArr = matrizStr.split('\n').map(i => i.split(' ').map(n => +n));

    const rlen = this.rowsArr.length;
    const clen = this.rowsArr[0].length;

    this.columnsArr = [];
    for (var i = 0; i < clen; ++i) {
      const columns = [];
      for (var j = 0; j < rlen; ++j) {
        columns[j] = this.rowsArr[j][i];
      }
      this.columnsArr[i] = columns;
    }
  }

  get rows() {
    return this.rowsArr;
  }

  get columns() {
    return this.columnsArr;
  }
}
