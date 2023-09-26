import { ReactNode, type KeyboardEvent, ChangeEventHandler } from 'react'
import { Block } from '../Block'
import { Typography } from '../Typography'
import { DropdownSC } from './Dropdown.styled'
import { CSSProperties } from '@linaria/core'
import { COLORS } from '../../../style_variables/COLORS'
import { DropdownItem } from './DropdownItem'

export interface IDropdownProps {
  children?: ReactNode
  id?: string
  name?: string
  pattern?: string
  value?: string
  defaultValue?: string
  min?: string
  max?: string
  minLength?: number
  maxLength?: number
  placeholder?: string
  placeholderColor?: COLORS
  colorDefault?: COLORS
  corners?: string
  label?: string
  height?: string
  required?: boolean
  borders?: string
  borderColorDefault?: string
  borderColorInvalid?: string
  autoComplete?: string
  autoFocus?: boolean
  onChange: ChangeEventHandler<HTMLSelectElement>
  className?: string
  style?: CSSProperties
  invalid?: boolean
}

export const Dropdown = ({
  name = '',
  value = '',
  placeholder = '',
  id = '',
  placeholderColor = COLORS.NEW_SURFACE_ON_SURFACE_2,
  label = '',
  colorDefault = COLORS.NEW_SURFACE_5,
  required = true,
  height = 'auto',
  borders = '1px',
  corners = '3px',
  invalid,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
  children,
  onChange,
}: IDropdownProps): JSX.Element => {
  return (
    <Block justify='center' gap={2}>
      <Typography size={12} color={COLORS.NEW_SURFACE_5}>
        {label}
      </Typography>
      <DropdownSC
        name={name}
        id={id}
        value={value}
        placeholderColor={placeholderColor}
        borderColorDefault={borderColorDefault}
        borderColorInvalid={borderColorInvalid}
        colorDefault={colorDefault}
        inputHeight={height}
        corners={corners}
        required={required}
        invalid={invalid}
        borders={borders}
        onChange={onChange}
      >
        {placeholder && (
          <DropdownItem
            value=''
            text={placeholder}
            hidden
          />
        )}
        {children}
      </DropdownSC>
    </Block>
  )
}
