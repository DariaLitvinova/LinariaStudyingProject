import { Rule } from 'effector-forms'
import { ERROR_MSG } from '../../constants/constants'

export const rules = {
  required: (): Rule<string> => ({
    name: 'required',
    validator: (value) => ({
      isValid: Boolean(value),
      errorText: ERROR_MSG.Required,
    }),
  }),
  email: (): Rule<string> => ({
    name: 'email',
    validator: (value) => ({
      isValid: /\S+@\S+\.\S+/.test(value),
      errorText: ERROR_MSG.NotEmail,
    }),
  }),
  phone: (): Rule<string> => ({
    name: 'phone',
    validator: (value) => ({
      isValid: /^\d{9}$/.test(value),
      errorText: ERROR_MSG.NotPhone,
    }),
  }),
  minLength: (min: number): Rule<string> => ({
    name: 'minLength',
    validator: (value) => ({
      isValid: value.length >= min,
      errorText: ERROR_MSG.MinSymb,
    }),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: 'maxLength',
    validator: (value) => ({
      isValid: value.length <= max,
      errorText: ERROR_MSG.MaxSymb,
    }),
  }),
  isTrue: (): Rule<boolean> => ({
    name: 'isTrue',
    validator: (value) => ({ isValid: value, errorText: ERROR_MSG.NotChecked }),
  }),
}
