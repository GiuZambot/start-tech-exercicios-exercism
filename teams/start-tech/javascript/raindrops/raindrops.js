export const convert = (numeroTestado) => {
    if (numeroTestado === 1) return '1';
    let rainDrop = '';
    if (!(numeroTestado % 3)) rainDrop += 'Pling';
    if (!(numeroTestado % 5)) rainDrop += 'Plang';
    if (!(numeroTestado % 7)) rainDrop += 'Plong';
    if (!rainDrop) rainDrop = `${numeroTestado}`;
    return rainDrop;
};