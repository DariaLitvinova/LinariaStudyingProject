import { createEvent, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'

export const openUserModalForm = createEvent()
export const closeUserModalForm = createEvent()

export const $isOpenModal = createStore<boolean>(
  false
)
  .on(openUserModalForm, () => true)
  .on([closeUserModalForm, submitFormFx.doneData], () => false )

sample({
  clock: closeUserModalForm,
  target: userForm.resetValues,
})
