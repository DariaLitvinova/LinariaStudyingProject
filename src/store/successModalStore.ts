import { createEvent, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'

export const closeModalSuccess = createEvent()

export const $isSuccessModal = createStore<boolean>(false)
  .on(submitFormFx.doneData, () => true)
  .on(closeModalSuccess, () => false)

sample({
  clock: closeModalSuccess,
  target: userForm.resetValues,
})
