import { createEvent, createStore, sample } from 'effector'
import { resetContactUsForm, sendContactUsFormFx } from './contactUsForm/model'

export const openContactUsModal = createEvent<boolean>()
export const closeContactUsModal = createEvent<boolean>()

export const $isOpenContactUsModal = createStore<boolean>(false)
  .on(openContactUsModal, () => true)
  .on([closeContactUsModal, sendContactUsFormFx.doneData], () => false)

sample({
  clock: closeContactUsModal,
  target: resetContactUsForm,
})
