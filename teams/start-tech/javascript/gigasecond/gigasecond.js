export const gigasecond = (date) => {
    const futureDate = date.getTime() + 1e12; // Data recebida mais um gigasegundo.
    return new Date(futureDate);
};