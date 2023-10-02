import { useStore, useStoreMap } from 'effector-react'
import { $signInForm, setSignInField } from '../../../../store/signInForm/model'
import { Input } from '../../../Input/Input'
import { SignInErrorsType, SignInFormType } from '../../../../store/signInForm/types'

interface IField {
  name: string
  type: string
  label: string
}

export const Field = ({ name, type, label }: IField) => {
  const { errors } = useStore($signInForm)
  const handleChange = setSignInField.prepend((event: any) => ({
    key: event.target.name,
    value: event.target.value,
  }))

  const value = useStoreMap({
    store: $signInForm, // take $form's state
    keys: [name], // watch for changes of `name`
    fn: (values) => values[name as keyof SignInFormType] || '', // retrieve data from $form's state in this way (note: there will be an error, if undefined is returned)
  })

  return (
    <Input
      label={label}
      name={name}
      type={type}
      value={value as string}
      invalid={!!errors[name as keyof SignInErrorsType]}
      errorText={errors[name as keyof SignInErrorsType]}
      onChange={handleChange}
    />
  )
}
