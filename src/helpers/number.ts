export const formatNumber = (plainNumber: number): string => {
  return new Intl.NumberFormat().format(plainNumber)
}
