import { useStore, useStoreMap } from 'effector-react'
import {
  $contactUsForm,
  setContactUsField,
} from '../../../../store/contactUsForm/model'
import { Input } from '../../../Input/Input'
import {
  ContactUsErrorsType,
  ContactUsFormType,
} from '../../../../store/contactUsForm/types'

interface IField {
  name: string
  type: string
  label: string
  disabled: boolean
}

export const Field = ({ name, type, label, disabled }: IField) => {
  const { errors } = useStore($contactUsForm)
  const handleChange = setContactUsField.prepend((event: any) => ({
    key: event.target.name,
    value: event.target.value,
  }))

  const value = useStoreMap({
    store: $contactUsForm, // take $form's state
    keys: [name], // watch for changes of `name`
    fn: (values) => values[name as keyof ContactUsFormType] || '', // retrieve data from $form's state in this way (note: there will be an error, if undefined is returned)
  })

  return (
    <Input
      label={label}
      name={name}
      type={type}
      value={value as string}
      disabled={disabled}
      invalid={!!errors[name as keyof ContactUsErrorsType]}
      errorText={errors[name as keyof ContactUsErrorsType]}
      onChange={handleChange}
    />
  )
}
