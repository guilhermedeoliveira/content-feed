export const sortItemsByKeyDescending = <T>(array: T[], key: string): T[] => {
  const getNestedValue = (obj: any, keyPath: string) =>
    keyPath.split('.').reduce((acc, part) => acc?.[part], obj)

  return array.sort((a, b) => {
    const valueA = getNestedValue(a, key)
    const valueB = getNestedValue(b, key)

    return valueA > valueB ? -1 : 1
  })
}
