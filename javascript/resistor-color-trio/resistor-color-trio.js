export class ResistorColorTrio {
  COLORS = {
    black: { value: 0, name: "ohms" },
    brown: { value: 1, name: "ohms" },
    red: { value: 2, name: "kiloohms" },
    orange: { value: 3, name: "kiloohms" },
    yellow: { value: 4, name: "kiloohms" },
    green: { value: 5, name: "megaohms" },
    blue: { value: 6, name: "megaohms" },
    violet: { value: 7, name: "megaohms" },
    grey: { value: 8, name: "gigaohms" },
    white: { value: 9, name: "gigaohms" }
  }

  constructor(resistorColors) {
    this.resistorColors = resistorColors;
  }

  get label() {
    // Erros, nulos, undefined, vazios, cores erradas nas 3 primeiras var
    if (!this.resistorColors.every(x => this.COLORS[x])) throw new Error('invalid color');

    const corValue1 = this.COLORS[this.resistorColors[0]].value;
    const corValue2 = this.COLORS[this.resistorColors[1]].value;
    const corValue3 = this.COLORS[this.resistorColors[2]].value;

    // Valor do resistor
    let value = +(`${corValue1}${corValue2}`) * 10 ** corValue3;

    // Dados do valor
    const exponent = Math.floor(Math.log10(value));
    const unitblock = Math.floor(exponent / 3);

    // Valor agrupado por matemática
    value = value / 10 ** (unitblock * 3);

    // Valor agrupado por for
    // for (let i = 0; i < 3; i++) {
    //     value = Math.log10(value) < 3 ? value : value / 1000;
    // }

    // Unidade
    const unit = this.COLORS[this.resistorColors[2]].name;

    //Template resposta
    const resistorLabel = `Resistor value: ${value} ${unit}`;
    return resistorLabel;
  }
}
