export type SignInErrorsType = {
  login: string
  password: string
  repeatPassword: string
  confirmation: string
  gender: string
  country: string
}

export type SignInFormType = {
  login: string
  password: string
  repeatPassword: string
  confirmation: boolean
  gender: string
  country: string
  errors: SignInErrorsType
}

export type SignInKeyType = {
  key: keyof SignInFormType
  value: string | boolean
}
