import { Rule } from 'effector-forms'

export const rules = {
  required: (): Rule<string> => ({
    name: 'required',
    validator: (value) => ({
      isValid: Boolean(value),
      errorText: 'Required field',
    }),
  }),
  email: (): Rule<string> => ({
    name: 'email',
    validator: (value) => ({
      isValid: /\S+@\S+\.\S+/.test(value),
      errorText: `Doesn't match email format`,
    }),
  }),
  phone: (): Rule<string> => ({
    name: 'phone',
    validator: (value) => ({
      isValid: /^\d{9}$/.test(value),
      errorText: `Doesn't match phone format`,
    }),
  }),
  minLength: (min: number): Rule<string> => ({
    name: 'minLength',
    validator: (value) => ({
      isValid: value.length >= min,
      errorText: 'Should be at least 2 symbols',
    }),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: 'maxLength',
    validator: (value) => ({
      isValid: value.length <= max,
      errorText: 'Should be not more than 20 symbols',
    }),
  }),
  isTrue: (): Rule<boolean> => ({
    name: 'isTrue',
    validator: (value) => ({ isValid: value, errorText: 'Should be checked' }),
  }),
}
