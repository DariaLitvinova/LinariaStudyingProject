import { HTMLInputTypeAttribute, ReactNode, type KeyboardEvent } from 'react'
import { Block } from '../Block'
import { Typography } from '../Typography'
import { InputSC } from './Input.styled'
import { CSSProperties } from '@linaria/core'
import { COLORS } from '../../../style_variables/COLORS'

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
  required?: boolean
  borders?: string
  borderColorDefault?: string
  borderColorInvalid?: string
  autoComplete?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
  invalid?: boolean
}

export const Input = ({
  type = 'text',
  name = '',
  placeholder = '',
  placeholderColor = COLORS.NEW_SURFACE_ON_SURFACE_2,
  label = '',
  colorDefault = COLORS.NEW_SURFACE_5,
  required = true,
  height = 'auto',
  borders = '1px',
  corners = '3px',
  invalid,
  autoComplete,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
}: IInputProps): JSX.Element => {
  return (
    <Block justify='center' gap={2}>
      <Typography size={12} color={COLORS.NEW_SURFACE_5}>
        {label}
      </Typography>
      <InputSC
        type={type}
        name={name}
        // pattern={pattern}
        // value={value}
        // defaultValue={defaultValue}
        // min={min}
        // max={max}
        // minLength={minLength}
        // maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        borderColorDefault={borderColorDefault}
        borderColorInvalid={borderColorInvalid}
        colorDefault={colorDefault}
        inputHeight={height}
        corners={corners}
        required={required}
        invalid={invalid}
        borders={borders}
      />
    </Block>
  )
}
