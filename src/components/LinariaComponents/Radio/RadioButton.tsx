import { Block } from '../Block'
import { InputSC, LabelSC } from './Label.styled'

export interface IRadioButtonProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton = ({
  id = '',
  name = '',
  title = '',
}: IRadioButtonProps): JSX.Element => {
  return (
    <Block orientation='horizontal' align='center' gap={5}>
      <InputSC
        type='radio'
        id={id}
        name={name}
        // value={value}
        // checked={checked ?? value === selectedValue}
        // defaultChecked={defaultChecked}
        // disabled={disabled}
        // onChange={onChange}
      />
      <LabelSC htmlFor={id}>{title}</LabelSC>
    </Block>
  )
}
