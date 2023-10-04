import { ContactUsFormType } from './types'
import { isEmail, isPhone, isRequired, maxLength, minLength } from './rules'
import { ERROR_MSG } from '../../constants/constants'

export const checkErrors = (state: ContactUsFormType) => {
  const { name, email, phone, file, gender, country, confirmation } = state
  const nameError = isRequired(name)
    ? minLength(2, name)
      ? maxLength(20, name)
        ? ''
        : ERROR_MSG.MaxSymb
      : ERROR_MSG.MinSymb
    : ERROR_MSG.Required
  const emailError = isRequired(email)
    ? isEmail(email)
      ? ''
      : ERROR_MSG.NotEmail
    : ERROR_MSG.Required
  const phoneError = isRequired(phone)
    ? isPhone(phone)
      ? ''
      : ERROR_MSG.NotPhone
    : ERROR_MSG.Required
  const fileError = isRequired(file) ? '' : ERROR_MSG.Required
  const genderError = isRequired(gender) ? '' : ERROR_MSG.Required
  const countryError = isRequired(country) ? '' : ERROR_MSG.Required
  const confirmationError = isRequired(confirmation) ? '' : ERROR_MSG.NotChecked

  return {
    nameError,
    emailError,
    phoneError,
    fileError,
    countryError,
    genderError,
    confirmationError,
  }
}
