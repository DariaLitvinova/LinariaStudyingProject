import { createStore } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { responseError } from '../constants/constants'
import { $contactUsForm, sendContactUsFormFx } from './contactUsForm/model'

export const $errorResponse = createStore<null | string>(null)
  .on([submitFormFx.failData, sendContactUsFormFx.failData], () => responseError)
  .reset([userForm.$values.updates, $contactUsForm])
