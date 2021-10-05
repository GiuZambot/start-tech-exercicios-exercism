export class DiffieHellman {
  private readonly _p: number;
  private readonly _g: number;

  constructor(p: number, g: number) {
    if (!p || p > 50 || !this.ehNumPrimo(p))
      throw 'Primeiro número não é Primo';
    if (!g || p > 50 || !this.ehNumPrimo(g))
      throw 'Segundo número não é Primo';
    this._p = p;
    this._g = g;
  }

  private ehNumPrimo(numeroATestar: number): boolean {
    for (let i = 2; i < Math.floor(numeroATestar ** 0.5); i+=2)
      if (numeroATestar % i === 0) return false;
    return numeroATestar > 1;
  }

  public getPublicKey(privateKey: number): number {
    if (!privateKey || privateKey < 2 || privateKey >= this._p)
      throw 'Chave invalida';
    return this._g ** privateKey % this._p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this._p;
  }
}
