export const isRequired = (value: string | boolean) => {
  return !!value
}

export const isTrue = (value: boolean) => {
  return value
}

export const isPasswordMatch = (pass1: string, pass2: string) => {
  return pass1 === pass2
}
