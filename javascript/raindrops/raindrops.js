export const convert = (numeroTestado) => {
  let rainDrop = '';
  !(numeroTestado % 3) ? rainDrop += 'Pling' : '';
  !(numeroTestado % 5) ? rainDrop += 'Plang' : '';
  !(numeroTestado % 7) ? rainDrop += 'Plong' : '';
  if (!rainDrop) rainDrop += numeroTestado;

  return rainDrop;
};
