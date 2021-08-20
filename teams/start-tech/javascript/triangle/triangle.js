export class Triangle {
    constructor(...sides) {
        // Lados do Triangulo para construção do triangulo
        this.ladoA = sides[0];
        this.ladoB = sides[1];
        this.ladoC = sides[2];

        // Determina quantos valores únicos tem o triangulos (inverso do número de lados iguais)
        this.ladosUnicosDoTriangulo = new Set(sides).size;

        // Verifica se tem algum lado zero (não é um triangulo)
        this.trianguloFake = sides.some(x => x === 0);

        // Verifica se o triangulo é possível segundos as regras trigonométricas
        const regraExistenciaUm = this.ladoA < (this.ladoB + this.ladoC);
        const regraExistenciaDois = this.ladoB < (this.ladoA + this.ladoC);
        const regraExistenciaTres = this.ladoC < (this.ladoA + this.ladoB);
        this.trianguloPodeExistir = regraExistenciaUm && regraExistenciaDois && regraExistenciaTres;
    }

    get isEquilateral() {
        // responde false se houver lado zero
        if (this.trianguloFake) return false;

        // Não tem todos lados iguais (um valor único)
        if (this.ladosUnicosDoTriangulo !== 1) return false;

        // Tem todos os lados iguais
        return true;
    }

    get isIsosceles() {
        // Resulta false se houver lado zero
        if (this.trianguloFake) return false;

        // Resultar falso se não puder existir
        if (!this.trianguloPodeExistir) return false;

        // Não tem dois lados iguais (dois valores únicos)
        if (this.ladosUnicosDoTriangulo === 3) return false;

        // Tem todos os lados iguais
        return true;
    }

    get isScalene() {
        // responde false se houver lado zero
        if (this.trianguloFake) return false;

        // Resultar falso se não puder existir
        if (!this.trianguloPodeExistir) return false;

        // Não tem todos lados diferentes (três valores únicos)
        if (this.ladosUnicosDoTriangulo !== 3) return false;

        // Tem todos os lados diferentes
        return true;
    }
}