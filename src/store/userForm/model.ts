import { createEffect, forward } from 'effector'
import { createForm } from 'effector-forms'
import { rules } from './rules'

type FormType = {
  name: string
  email: string
  phone: string
  gender: string
  country: string
  confirmation: boolean
  photo: string
}

export const submitFormFx = createEffect((form: FormType) => {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (form.name === 'invalid') {
        reject()
      }
      resolve()
    }, 3000)
  )
})

export const userForm = createForm({
  fields: {
    name: {
      init: '',
      rules: [rules.required(), rules.minLength(2), rules.maxLength(20)],
    },
    email: {
      init: '',
      rules: [rules.required(), rules.email()],
    },
    phone: {
      init: '',
      rules: [rules.required(), rules.phone()],
    },
    gender: {
      init: '',
      rules: [rules.required()],
    },
    country: {
      init: '',
      rules: [rules.required()],
    },
    confirmation: {
      init: false,
      rules: [rules.isTrue()],
    },
    photo: {
      init: '',
      rules: [rules.required()],
    },
  },
  validateOn: ['submit'],
})

forward({
  from: userForm.formValidated,
  to: submitFormFx,
})
