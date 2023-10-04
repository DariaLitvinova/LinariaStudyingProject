import { HTMLInputTypeAttribute, ReactNode } from 'react'
import { InputSC } from './Input.styled'
import { CSSProperties } from '@linaria/core'
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

export interface IInputProps {
  children?: ReactNode
  id?: string
  type?: HTMLInputTypeAttribute
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  invalid?: boolean
  errorText?: string
  disabled?: boolean
}

export const Input = ({
  type = 'text',
  name = '',
  placeholder = '',
  placeholderColor = COLORS.NEW_SURFACE_ON_SURFACE_2,
  label = '',
  colorDefault = COLORS.NEW_SURFACE_5,
  height = 'auto',
  borders = '1px',
  corners = '3px',
  invalid,
  autoComplete,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
  errorText,
  onChange,
  disabled,
}: IInputProps): JSX.Element => {
  return (
    <WrapperSC justify={JustifyContent.Center} gap='2px'>
      <WrapperSC
        orientation={Orientation.Row}
        justify={JustifyContent.SpaceBetween}
      >
        <TypographySC size={12} color={COLORS.NEW_SURFACE_5}>
          {label}
        </TypographySC>
        {errorText && (
          <ErrorTypographySC size={12} width='auto'>
            {errorText}
          </ErrorTypographySC>
        )}
      </WrapperSC>
      <InputSC
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
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
      />
    </WrapperSC>
  )
}
