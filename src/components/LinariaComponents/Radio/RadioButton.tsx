import { Block } from '../Block'
import { InputSC, LabelSC } from './Label.styled'

export interface IRadioButtonProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedValue: string
  invalid?: boolean
  disabled?: boolean
}

export const RadioButton = ({
  id = '',
  name = '',
  title = '',
  value,
  onChange,
  selectedValue,
  invalid,
  disabled,
}: IRadioButtonProps): JSX.Element => {
  return (
    <Block orientation='horizontal' align='center' gap={5}>
      <InputSC
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={value === selectedValue}
        disabled={disabled}
        onChange={onChange}
      />
      <LabelSC invalid={invalid} htmlFor={id}>
        {title}
      </LabelSC>
    </Block>
  )
}
