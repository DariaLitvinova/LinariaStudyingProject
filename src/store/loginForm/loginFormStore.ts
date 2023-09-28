import { createEffect, createEvent, createStore, sample } from 'effector'
import { isPasswordMatch, isRequired } from './rules'

export type LoginErrorsType = {
  login: string
  password: string
  repeatPassword: string
  confirmation: string
  gender: string
  country: string
}

export type LoginFormType = {
  login: string
  password: string
  repeatPassword: string
  confirmation: boolean
  gender: string
  country: string
  errors: LoginErrorsType
}

const initialState = {
  login: '',
  password: '',
  repeatPassword: '',
  confirmation: false,
  gender: '',
  country: '',
  errors: {
    login: '',
    password: '',
    repeatPassword: '',
    confirmation: '',
    gender: '',
    country: '',
  },
}

type LoginKeyType = {
  key: keyof LoginFormType
  value: string | boolean
}

export const validateForm = createEvent()

export const sendFormFx = createEffect(
  (formData: LoginFormType) =>
    new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve()
        // console.log(`Signed in as ${formData.login}`)
        // console.log('formData', formData)
      }, 2500)
    )
)

export const submitted = createEvent()
export const setField = createEvent<LoginKeyType>()

export const $form = createStore<LoginFormType>(initialState)
  .on(setField, (state, { key, value }: LoginKeyType) => ({
    ...state,
    [key]: value,
  }))
  .on(validateForm, (state) => {
    const loginError = isRequired(state.login) ? '' : 'Required field'
    const passwordError = isRequired(state.password) ? '' : 'Required field'
    const repeatPasswordError = isRequired(state.repeatPassword)
      ? isPasswordMatch(state.password, state.repeatPassword)
        ? ''
        : 'Please make sure your passwords match'
      : 'Required field'
    const genderError = isRequired(state.gender) ? '' : 'Required field'
    const countryError = isRequired(state.country) ? '' : 'Required field'
    const confirmationError = isRequired(state.confirmation)
      ? ''
      : 'Should be checked'

    return {
      ...state,
      errors: {
        ...state.errors,
        login: loginError,
        password: passwordError,
        repeatPassword: repeatPasswordError,
        country: countryError,
        gender: genderError,
        confirmation: confirmationError,
      },
    }
  })

sample({
  clock: submitted, // when `submitted` is triggered
  source: $form, // Take LATEST state from $form, and
  target: sendFormFx, // pass it to `sendFormFx`, in other words -> sendFormFx(state)
  //fn: (sourceState, clockParams) => transformedData // we could additionally transform data here, but if we need just pass source's value, we may omit this property
})
