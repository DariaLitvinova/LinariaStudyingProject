import { SignInFormType } from './types'
import { isPasswordMatch, isRequired } from './rules'
import { ERROR_MSG } from '../../constants/constants'

export const checkErrors = (state: SignInFormType) => {
  const loginError = isRequired(state.login) ? '' : ERROR_MSG.Required
  const passwordError = isRequired(state.password) ? '' : ERROR_MSG.Required
  const repeatPasswordError = isRequired(state.repeatPassword)
    ? isPasswordMatch(state.password, state.repeatPassword)
      ? ''
      : ERROR_MSG.PasswordMismatch
    : ERROR_MSG.Required
  const genderError = isRequired(state.gender) ? '' : ERROR_MSG.Required
  const countryError = isRequired(state.country) ? '' : ERROR_MSG.Required
  const confirmationError = isRequired(state.confirmation)
    ? ''
    : ERROR_MSG.NotChecked

  return {
    loginError,
    passwordError,
    repeatPasswordError,
    countryError,
    genderError,
    confirmationError,
  }
}
