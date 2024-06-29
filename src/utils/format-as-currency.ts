/**
 * Format a number as currency
 *
 * @param value Number to be formatted
 */
export function formatAsCurrency(value: number) {
  const currency = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  return currency.format(value)
}
