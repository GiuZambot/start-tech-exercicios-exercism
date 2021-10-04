export class Robot {
  private _name: string;
  private static nomes = new Set<string>();
  constructor() {
    this._name = this.createName();
  }

  private createName(): string {
    const RandonName = (): string => {
      const primeiraLetras: string =
        String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      const segundaLetras: string =
        String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      const tresNumeros: string = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      return primeiraLetras + segundaLetras + tresNumeros;
    }

    let novoNome: string = RandonName();
    while (Robot.nomes.has(novoNome)) {
      novoNome = RandonName();
    }

    Robot.nomes.add(novoNome);
    return novoNome;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.createName();
  }

  public static releaseNames(): void {
    Robot.nomes.clear();
  }
}
