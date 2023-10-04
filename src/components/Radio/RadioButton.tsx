import { Orientation } from '../../style_variables/CSS_PROPERTIES'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
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
    <WrapperSC orientation={Orientation.Row} align='center' gap='5px'>
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
    </WrapperSC>
  )
}
