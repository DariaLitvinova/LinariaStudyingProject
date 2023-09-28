import { createEvent, createStore, sample } from "effector"
import { submitFormFx, userForm } from "./userForm/model"

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
    .on(submitFormFx.doneData, (state) => ({
      ...state,
      isOpenModal: false,
    }))
  
  sample({
    clock: closeModalForm,
    target: userForm.resetValues,
  })