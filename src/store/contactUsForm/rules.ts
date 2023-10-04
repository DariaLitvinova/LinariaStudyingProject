export const isRequired = (value: string | boolean) => {
  return !!value
}

export const isTrue = (value: boolean) => {
  return value
}

export const isEmail = (value: string) => {
  return /\S+@\S+\.\S+/.test(value)
}

export const isPhone = (value: string) => {
  return /^\d{9}$/.test(value)
}

export const minLength = (min: number, value: string) => {
  return value.length >= min
}

export const maxLength = (max: number, value: string) => {
  return value.length <= max
}
