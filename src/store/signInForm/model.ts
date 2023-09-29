import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector'
import { checkErrors } from './utils'
import { SignInFormType, SignInKeyType } from './types'

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

export const validateFormFx = createEffect((signInForm: SignInFormType) => {
  const errorMsg = checkErrors(signInForm)
  return new Promise<void>((resolve, reject) => {
    if (Object.values(errorMsg).some((err) => Boolean(err))) reject()
    resolve()
  })
})

export const submitSignIn = createEvent()
export const submitted = createEvent()
export const setSignInField = createEvent<SignInKeyType>()
export const resetSignInForm = createEvent()

export const sendSignInFormFx = createEffect(
  () =>
    new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve()
      }, 2500)
    )
)

export const $signInForm = createStore<SignInFormType>(initialState)
  .on(setSignInField, (state, { key, value }: SignInKeyType) => {
    return {
      ...state,
      [key]: value,
      errors: {
        ...state.errors,
        [key]: '',
      },
    }
  })
  .on(validateFormFx.fail, (state) => {
    const {
      loginError,
      passwordError,
      repeatPasswordError,
      countryError,
      genderError,
      confirmationError,
    } = checkErrors(state)

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
  .reset(resetSignInForm)

sample({
  clock: submitSignIn,
  source: $signInForm,
  target: validateFormFx,
})

forward({ from: validateFormFx.done, to: submitted })

sample({
  clock: submitted, // when `submitted` is triggered
  source: $signInForm, // Take LATEST state from $form, and
  target: sendSignInFormFx, // pass it to `sendSignInFormFx`, in other words -> sendSignInFormFx(state)
  //fn: (sourceState, clockParams) => transformedData // we could additionally transform data here, but if we need just pass source's value, we may omit this property
})
