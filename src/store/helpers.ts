export const convertTemp = (value: number, to: string) =>
  Math.round(to === 'C' ? ((value - 32) / 9) * 5 : (value * 9) / 5 + 32);
