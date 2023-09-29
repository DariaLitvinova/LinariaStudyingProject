import { createEvent, createStore, sample } from "effector"
import { submitFormFx, userForm } from "./userForm/model"

type userModalStoreType = {
    isOpenModal: boolean
  }
  
  const initialModalState = {
    isOpenModal: false,
  }
  
  export const openUserModalForm = createEvent<boolean>()
  export const closeUserModalForm = createEvent<boolean>()
  
  export const $userModalStore = createStore<userModalStoreType>(initialModalState)
    .on(openUserModalForm, (state) => {
      return { ...state, isOpenModal: true }
    })
    .on(closeUserModalForm, (state) => {
      return { ...state, isOpenModal: false }
    })
    .on(submitFormFx.doneData, (state) => ({
      ...state,
      isOpenModal: false,
    }))
  
  sample({
    clock: closeUserModalForm,
    target: userForm.resetValues,
  })