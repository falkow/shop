export const currencyFormatter = (number: number) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'PLN',
    style: 'currency',
  });
  return CURRENCY_FORMATTER.format(number);
};
