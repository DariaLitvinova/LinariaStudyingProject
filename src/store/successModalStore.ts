import { createEvent, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { resetContactUsForm, sendContactUsFormFx } from './contactUsForm/model'

export const closeModalSuccess = createEvent()

export const $isSuccessModal = createStore<boolean>(false)
  .on(submitFormFx.doneData, () => true)
  .on(sendContactUsFormFx.doneData, () => true)
  .on(closeModalSuccess, () => false)

sample({
  clock: closeModalSuccess,
  target: [userForm.resetValues, resetContactUsForm],
})
