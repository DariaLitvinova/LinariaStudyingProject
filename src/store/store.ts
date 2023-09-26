import { createEvent, createStore } from 'effector'

type ModalStoreType = {
  isOpenModal: boolean
}

const initialModalState = {
  isOpenModal: false,
}

export const openModalForm = createEvent<boolean>()
export const closeModalForm = createEvent<boolean>()

export const $modalStore = createStore<ModalStoreType>(initialModalState)
  .on(openModalForm, (state) => {
    return { ...state, isOpenModal: true }
  })
  .on(closeModalForm, (state) => {
    return { ...state, isOpenModal: false }
  })
