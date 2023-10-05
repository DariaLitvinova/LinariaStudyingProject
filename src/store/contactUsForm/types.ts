export type ContactUsErrorsType = {
  name: string
  email: string
  phone: string
  file: string
  confirmation: string
  gender: string
  country: string
}

export type ContactUsFormType = {
  name: string
  email: string
  phone: string
  file: string
  confirmation: boolean
  gender: string
  country: string
}

export type ContactUsKeyType = {
  key: keyof ContactUsFormType
  value: string | boolean
}
