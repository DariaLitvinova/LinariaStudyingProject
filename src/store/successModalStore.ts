import { createEvent, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { resetSignInForm, sendSignInFormFx } from './signInForm/model'

export const closeModalSuccess = createEvent()

export const $isSuccessModal = createStore<boolean>(false)
  .on(submitFormFx.doneData, () => true)
  .on(sendSignInFormFx.doneData, () => true)
  .on(closeModalSuccess, () => false)

sample({
  clock: closeModalSuccess,
  target: [userForm.resetValues, resetSignInForm],
})
