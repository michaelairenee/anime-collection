export const checkInputValidity = (value: string) => {
  const regex = /^[a-zA-Z0-9\s]*$/
  return regex.test(value)
}

export const isCollectionExist = (value: string, data: any) => {
  if (data.find((dt: any) => dt.name === value)) return true
  return false
}
