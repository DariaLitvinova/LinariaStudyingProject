import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector'
import { checkErrors } from './utils'
import { ContactUsFormType, ContactUsKeyType } from './types'

const initialState = {
  name: '',
  email: '',
  phone: '',
  file: '',
  confirmation: false,
  gender: '',
  country: '',
  errors: {
    name: '',
    email: '',
    phone: '',
    file: '',
    confirmation: '',
    gender: '',
    country: '',
  },
}

export const validateFormFx = createEffect(
  (contactUsForm: ContactUsFormType) => {
    const errorMsg = checkErrors(contactUsForm)
    return new Promise<void>((resolve, reject) => {
      if (Object.values(errorMsg).some((err) => Boolean(err))) reject()
      resolve()
    })
  }
)

export const submitContactUs = createEvent()
export const submitted = createEvent()
export const setContactUsField = createEvent<ContactUsKeyType>()
export const resetContactUsForm = createEvent()

export const sendContactUsFormFx = createEffect(
  (form: ContactUsFormType) =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (form.name === 'invalid') {
          reject()
        }
        resolve()
      }, 3000)
    )
)

export const $contactUsForm = createStore<ContactUsFormType>(initialState)
  .on(setContactUsField, (state, { key, value }: ContactUsKeyType) => {
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
      nameError,
      emailError,
      phoneError,
      fileError,
      countryError,
      genderError,
      confirmationError,
    } = checkErrors(state)

    return {
      ...state,
      errors: {
        ...state.errors,
        name: nameError,
        email: emailError,
        phone: phoneError,
        file: fileError,
        country: countryError,
        gender: genderError,
        confirmation: confirmationError,
      },
    }
  })
  .reset(resetContactUsForm)

sample({
  clock: submitContactUs,
  source: $contactUsForm,
  target: validateFormFx,
})

forward({ from: validateFormFx.done, to: submitted })

sample({
  clock: submitted, // when `submitted` is triggered
  source: $contactUsForm, // Take LATEST state from $form, and
  target: sendContactUsFormFx, // pass it to `sendContactUsFormFx`, in other words -> sendContactUsFormFx(state)
  //fn: (sourceState, clockParams) => transformedData // we could additionally transform data here, but if we need just pass source's value, we may omit this property
})
