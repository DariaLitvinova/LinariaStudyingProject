import { createStore } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { responseError } from '../constants/constants'

export const $errorResponse = createStore<null | string>(null)
  .on(submitFormFx.failData, () => responseError)
  .reset(userForm.$values.updates)
