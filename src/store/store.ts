import { createEvent, createStore, forward } from 'effector'
import { submitFormFx } from './userForm/model'

type ModalStoreType = {
  isOpenModal: boolean
  isError: boolean
  isSuccess: boolean
}

const initialModalState = {
  isOpenModal: false,
  isError: false,
  isSuccess: false,
}

export const openModalForm = createEvent<boolean>()
export const closeModalForm = createEvent<boolean>()
const showModalSuccess = createEvent()
export const closeModalSuccess = createEvent()

export const $modalStore = createStore<ModalStoreType>(initialModalState)
  .on(openModalForm, (state) => {
    return { ...state, isOpenModal: true }
  })
  .on(closeModalForm, (state) => {
    return { ...state, isOpenModal: false }
  })
  .on(showModalSuccess, (state) => ({
    ...state,
    isOpenModal: false,
    isSuccess: true,
  }))
  .on(closeModalSuccess, (state) => {
    return {
      ...state,
      isSuccess: false,
    }
  })

forward({
  from: submitFormFx.doneData,
  to: showModalSuccess,
})

