import { createEffect, createStore, sample } from 'effector'
import { submitFormFx, userForm } from './userForm/model'
import { resetContactUsForm, sendContactUsFormFx } from './contactUsForm/model'

export const closeModalSuccessFx = createEffect(
  () =>
    new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve()
      }, 3000)
    )
)

export const $isSuccessModal = createStore<boolean>(false)
  .on(submitFormFx.doneData, () => true)
  .on(sendContactUsFormFx.doneData, () => true)
  .on(closeModalSuccessFx.doneData, () => false)

sample({
  clock: [submitFormFx.doneData, sendContactUsFormFx.doneData],
  target: closeModalSuccessFx,
})

sample({
  clock: closeModalSuccessFx.done,
  target: [userForm.resetValues, resetContactUsForm],
})
