import { createEffect, createEvent, createStore, sample } from 'effector'
import { checkErrors } from './utils'
import {
  ContactUsErrorsType,
  ContactUsFormType,
  ContactUsKeyType,
} from './types'

const initialState = {
  name: '',
  email: '',
  phone: '',
  file: '',
  confirmation: false,
  gender: '',
  country: '',
}

const initialErrorState = {
  name: '',
  email: '',
  phone: '',
  file: '',
  confirmation: '',
  gender: '',
  country: '',
}

export const submitContactUs = createEvent()
export const submitted = createEvent()
export const setContactUsField = createEvent<ContactUsKeyType>()
export const resetContactUsForm = createEvent()
const checkValidationErrors = createEvent<ContactUsFormType>()

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

export const $errors = createStore<ContactUsErrorsType>(initialErrorState)
  .on(setContactUsField, (state, { key }: ContactUsKeyType) => {
    return {
      ...state,
      [key]: '',
    }
  })
  .reset(resetContactUsForm)
  .on(checkValidationErrors, (state, payload) => {
    const {
      nameError,
      emailError,
      phoneError,
      fileError,
      countryError,
      genderError,
      confirmationError,
    } = checkErrors(payload)

    return {
      ...state,
      name: nameError,
      email: emailError,
      phone: phoneError,
      file: fileError,
      country: countryError,
      gender: genderError,
      confirmation: confirmationError,
    }
  })

export const $contactUsForm = createStore<ContactUsFormType>(initialState)
  .on(setContactUsField, (state, { key, value }: ContactUsKeyType) => {
    return {
      ...state,
      [key]: value,
    }
  })
  .reset(resetContactUsForm)

sample({
  clock: submitContactUs,
  source: $contactUsForm,
  filter: (contactUsForm) => {
    const errorMsg = checkErrors(contactUsForm)
    return !Object.values(errorMsg).some((err) => Boolean(err))
  },
  target: submitted,
})

sample({
  clock: submitContactUs,
  source: $contactUsForm,
  target: checkValidationErrors,
})

sample({
  clock: submitted, // when `submitted` is triggered
  source: $contactUsForm, // Take LATEST state from $form, and
  target: sendContactUsFormFx, // pass it to `sendContactUsFormFx`, in other words -> sendContactUsFormFx(state)
  //fn: (sourceState, clockParams) => transformedData // we could additionally transform data here, but if we need just pass source's value, we may omit this property
})
