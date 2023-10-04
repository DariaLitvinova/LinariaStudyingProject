import { createEvent, createStore, sample } from 'effector'
import { resetContactUsForm, sendContactUsFormFx } from './contactUsForm/model'

type contactUsStoreType = {
  isOpenContactUsModal: boolean
}

const initialState = {
  isOpenContactUsModal: false,
}

export const openContactUsModal = createEvent<boolean>()
export const closeContactUsModal = createEvent<boolean>()

export const $contactUsUserModalStore = createStore<contactUsStoreType>(initialState)
  .on(openContactUsModal, (state) => {
    return { ...state, isOpenContactUsModal: true }
  })
  .on(closeContactUsModal, (state) => {
    return { ...state, isOpenContactUsModal: false }
  })
  .on(sendContactUsFormFx.doneData, (state) => ({
    ...state,
    isOpenContactUsModal: false,
  }))

  sample({
    clock: closeContactUsModal,
    target: resetContactUsForm,
  })
