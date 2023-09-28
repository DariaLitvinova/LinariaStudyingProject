import { createEvent, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { sendFormFx } from './loginForm/loginFormStore'

export const closeModalSuccess = createEvent()

export const $isSuccessModal = createStore<boolean>(false)
  .on(submitFormFx.doneData, () => true)
  .on(sendFormFx.doneData, () => true)
  .on(closeModalSuccess, () => false)

sample({
  clock: closeModalSuccess,
  target: [userForm.resetValues],
})
