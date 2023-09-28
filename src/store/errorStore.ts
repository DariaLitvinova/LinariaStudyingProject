import { createStore } from 'effector'
import { submitFormFx, userForm } from './userForm/model'

export const $errorResponse = createStore<null | string>(null)
  .on(submitFormFx.failData, () => 'Error. Something went wrong.')
  .reset(userForm.$values.updates)
