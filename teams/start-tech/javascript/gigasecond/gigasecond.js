export const gigasecond = (date) => {
    const futureDate = new Date(Date.parse(date)).getTime() + 10 ** 12; // Data recebida mais um gigasegundo.
    return new Date(futureDate);
};