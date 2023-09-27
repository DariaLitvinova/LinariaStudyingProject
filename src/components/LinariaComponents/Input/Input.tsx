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
  borders?: string
  borderColorDefault?: string
  borderColorInvalid?: string
  autoComplete?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
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
    <Block justify='center' gap={2}>
      <Block orientation='horizontal' justify='space-between'>
        <Typography size={12} color={COLORS.NEW_SURFACE_5}>
          {label}
        </Typography>
        {errorText && (
          <Typography size={12} color={COLORS.ERROR}>
            {errorText}
          </Typography>
        )}
      </Block>
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
    </Block>
  )
}
