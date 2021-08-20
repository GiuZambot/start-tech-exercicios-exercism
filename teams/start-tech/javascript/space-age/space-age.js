const periodoOrbital = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0, // 365.25 Earth days, or 31557600 seconds
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

const anoDaTerraEmSegundos = 31557600;

export const age = (planeta, idadeTerrestre) => {
    const idadeNoPlaneta = idadeTerrestre / anoDaTerraEmSegundos / periodoOrbital[planeta];
    const idadeFloatPrecisao2 = Number.parseFloat(idadeNoPlaneta.toFixed(2));
    return idadeFloatPrecisao2;
};