export const crcNumberFormat = ({ value, min = 0, max = 2, format = 'en-EN' }) =>
  new Intl.NumberFormat(format, { maximumFractionDigits: max, minimumFractionDigits: min }).format(
    value,
  );