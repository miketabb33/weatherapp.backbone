export const validateZip = (zip: string) => {
  const zipRegex = /\b\d{5}\b/g
  const isValid = zipRegex.test(zip)

  if (!isValid) throw 'Zip must be 5 numbers'
}
