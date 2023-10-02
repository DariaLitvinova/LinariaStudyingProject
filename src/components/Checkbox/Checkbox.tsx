import { WrapperSC } from '../Wrapper/Wrapper.styled'
import { LabelSC } from '../Radio/Label.styled'
import { ErrorTypographySC } from '../Typography/Typography.styled'
import { CheckboxSC } from './Checkbox.styled'
import { AlignItems, Orientation } from '../../style_variables/CSS_PROPERTIES'

export interface ICheckboxProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  invalid?: boolean
  errorText?: string
  disabled?: boolean
}

export const Checkbox = ({
  id = '',
  name = '',
  title = '',
  invalid,
  onChange,
  errorText,
  disabled,
}: ICheckboxProps): JSX.Element => {
  return (
    <WrapperSC>
      {errorText && (
        <ErrorTypographySC size={12}>{errorText}</ErrorTypographySC>
      )}
      <WrapperSC
        orientation={Orientation.Row}
        align={AlignItems.Center}
        gap='15px'
      >
        <CheckboxSC
          disabled={disabled}
          type='checkbox'
          id={id}
          name={name}
          onChange={onChange}
        />
        <LabelSC disabled={disabled} invalid={invalid} htmlFor={id}>
          {title}
        </LabelSC>
      </WrapperSC>
    </WrapperSC>
  )
}
