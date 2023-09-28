import { useStore, useStoreMap } from 'effector-react'
import { $form, LoginErrorsType, LoginFormType, setField } from '../../store/loginForm/loginFormStore'
import { Input } from '../LinariaComponents/Input/Input'

interface IField {
  name: string
  type: string
  label: string
}

export const Field = ({ name, type, label }: IField) => {
  const { errors } = useStore($form)
  const handleChange = setField.prepend((event: any) => ({
    key: event.target.name,
    value: event.target.value,
  }))

  const value = useStoreMap({
    store: $form, // take $form's state
    keys: [name], // watch for changes of `name`
    fn: (values) => values[name as keyof LoginFormType] || '', // retrieve data from $form's state in this way (note: there will be an error, if undefined is returned)
  })

  return (
    <Input
      label={label}
      name={name}
      type={type}
      value={value as string}
      invalid={!!errors[name as keyof LoginErrorsType]}
      errorText={errors[name as keyof LoginErrorsType]}
      onChange={handleChange}
    />
  )
}
