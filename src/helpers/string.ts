export const cleanupString = (input: string): string => {
  const regex = /%/g
  return input.replace(regex, '')
}
