import { createEvent, createStore, sample } from 'effector'
import { resetSignInForm, sendSignInFormFx } from './signInForm/model'

type SignInStoreType = {
  isOpenSignInModal: boolean
}

const initialState = {
  isOpenSignInModal: false,
}

export const openSignInModal = createEvent<boolean>()
export const closeSignInModal = createEvent<boolean>()

export const $signInUserModalStore = createStore<SignInStoreType>(initialState)
  .on(openSignInModal, (state) => {
    return { ...state, isOpenSignInModal: true }
  })
  .on(closeSignInModal, (state) => {
    return { ...state, isOpenSignInModal: false }
  })
  .on(sendSignInFormFx.doneData, (state) => ({
    ...state,
    isOpenSignInModal: false,
  }))

  sample({
    clock: closeSignInModal,
    target: resetSignInForm,
  })
