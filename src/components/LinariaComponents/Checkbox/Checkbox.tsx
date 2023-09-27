import { CSSProperties } from '@linaria/core'
import { COLORS } from '../../../style_variables/COLORS'
import { Block } from '../Block'
import { LabelSC } from '../Radio/Label.styled'
import { Typography } from '../Typography'
import { CheckboxSC } from './Checkbox.styled'

export interface ICheckboxProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  invalid?: boolean
  errorText?: string
  style?: CSSProperties
  disabled?: boolean
}

export const Checkbox = ({
  id = '',
  name = '',
  title = '',
  invalid,
  onChange,
  errorText,
  style,
  disabled,
}: ICheckboxProps): JSX.Element => {
  return (
    <Block>
      {errorText && (
        <Typography
          size={12}
          color={COLORS.ERROR}
          style={{ width: '100%', textAlign: 'right' }}
        >
          {errorText}
        </Typography>
      )}
      <Block orientation='horizontal' align='center' gap={15}>
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
      </Block>
    </Block>
  )
}
