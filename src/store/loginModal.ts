import { createEvent, createStore } from 'effector'
import { sendFormFx } from './loginForm/loginFormStore'

type LoginStoreType = {
  isOpenLoginModal: boolean
}

const initialState = {
  isOpenLoginModal: false,
}

export const openLoginModal = createEvent<boolean>()
export const closeLoginModal = createEvent<boolean>()

export const $loginModalStore = createStore<LoginStoreType>(initialState)
  .on(openLoginModal, (state) => {
    return { ...state, isOpenLoginModal: true }
  })
  .on(closeLoginModal, (state) => {
    return { ...state, isOpenLoginModal: false }
  })
  .on(sendFormFx.doneData, (state) => ({
    ...state,
    isOpenLoginModal: false,
  }))
