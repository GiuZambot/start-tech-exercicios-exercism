// Segunda versão com verificação pelo método isDegenerate
export class Triangle {
    constructor(...sides) {
        // Lados do Triangulo para construção do triangulo
        this.ladoA = sides[0];
        this.ladoB = sides[1];
        this.ladoC = sides[2];
        this.sides = sides;

        // Determina quantos valores únicos tem o triangulos (inverso do número de lados iguais)
        this.ladosUnicosDoTriangulo = new Set(sides).size;
    }

    get isEquilateral() {
        // Resultar falso se não puder existir
        if (this.isDegenerate) return false;

        // Não tem todos lados iguais (um valor único)
        if (this.ladosUnicosDoTriangulo !== 1) return false;

        // Tem todos os lados iguais
        return true;
    }

    get isIsosceles() {
        // Resultar falso se não puder existir
        if (this.isDegenerate) return false;

        // Não tem dois lados iguais (dois valores únicos)
        if (this.ladosUnicosDoTriangulo === 3) return false;

        // Tem todos os lados iguais
        return true;
    }

    get isScalene() {
        // Resultar falso se não puder existir
        if (this.isDegenerate) return false;

        // Não tem todos lados diferentes (três valores únicos)
        if (this.ladosUnicosDoTriangulo !== 3) return false;

        // Tem todos os lados diferentes
        return true;
    }

    get isDegenerate() {
        // Verifica triangulos degenerados pelas regras de existência dos triangulos
        const trianguloComZero = this.sides.some(x => x === 0);
        const regraExistenciaUm = this.ladoA >= (this.ladoB + this.ladoC);
        const regraExistenciaDois = this.ladoB >= (this.ladoA + this.ladoC);
        const regraExistenciaTres = this.ladoC >= (this.ladoA + this.ladoB);
        return regraExistenciaUm || regraExistenciaDois || regraExistenciaTres || trianguloComZero;
    }
}