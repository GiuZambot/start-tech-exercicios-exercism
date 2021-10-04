export function hey(message: string): string {
  const frase: string =
    message.trim();
  const ehPergunta: boolean =
    frase.slice(-1) === '?';
  const ehSilencio: boolean =
    frase === '';
  const temLetras: boolean =
    !!(frase.match(/[a-z]/i));
  const ehGritaria: boolean =
    frase.toUpperCase() === frase && temLetras;

  if (ehSilencio)
    return 'Fine. Be that way!'
  if (ehGritaria && ehPergunta)
    return "Calm down, I know what I'm doing!"
  if (ehGritaria)
    return 'Whoa, chill out!'
  if (ehPergunta)
    return 'Sure.'
  return 'Whatever.'
}