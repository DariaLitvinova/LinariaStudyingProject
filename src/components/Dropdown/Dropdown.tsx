import { ReactNode, ChangeEventHandler } from 'react'
import { DropdownSC } from './Dropdown.styled'
import { CSSProperties } from '@linaria/core'
import { DropdownItem } from './DropdownItem'
import { COLORS } from '../../style_variables/COLORS'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
import {
  TypographySC,
  ErrorTypographySC,
} from '../Typography/Typography.styled'
import {
  JustifyContent,
  Orientation,
} from '../../style_variables/CSS_PROPERTIES'

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
  borders?: string
  borderColorDefault?: string
  borderColorInvalid?: string
  autoComplete?: string
  autoFocus?: boolean
  onChange: ChangeEventHandler<HTMLSelectElement>
  invalid?: boolean
  errorText?: string
  disabled?: boolean
}

export const Dropdown = ({
  name = '',
  value = '',
  placeholder = '',
  id = '',
  placeholderColor = COLORS.NEW_SURFACE_ON_SURFACE_2,
  label = '',
  colorDefault = COLORS.NEW_SURFACE_5,
  height = 'auto',
  borders = '1px',
  corners = '3px',
  invalid,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
  children,
  onChange,
  errorText,
  disabled,
}: IDropdownProps): JSX.Element => {
  return (
    <WrapperSC justify='center' gap='2px'>
      <WrapperSC
        orientation={Orientation.Row}
        justify={JustifyContent.SpaceBetween}
      >
        <TypographySC size={12} color={COLORS.NEW_SURFACE_5}>
          {label}
        </TypographySC>
        {errorText && (
          <ErrorTypographySC size={12}>{errorText}</ErrorTypographySC>
        )}
      </WrapperSC>
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
        invalid={invalid}
        borders={borders}
        disabled={disabled}
        onChange={onChange}
      >
        {placeholder && <DropdownItem value='' text={placeholder} hidden />}
        {children}
      </DropdownSC>
    </WrapperSC>
  )
}
