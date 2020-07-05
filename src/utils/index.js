export const round = (number) => Math.round(number * 100) / 100;

export const isFloat = (n) => Number(n) === n && n % 1 !== 0;
