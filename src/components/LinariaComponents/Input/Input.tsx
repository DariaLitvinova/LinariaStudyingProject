import { HTMLInputTypeAttribute, ReactNode, type KeyboardEvent } from 'react'
import { Block } from '../Block'
import { Typography } from '../Typography'
import { InputSC } from './Input.styled'
import { CSSProperties } from '@linaria/core'
import { COLORS } from '../../../style_variables/COLORS'

export interface IInputProps {
  innerRef?: React.ForwardedRef<HTMLInputElement>
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
//   colorDisabled?: InputFontColors
  label?: string
//   labelFont?: TextBoxTypes
//   labelColorDefault?: TextBoxColors
  inputLabelWidth?: string
  inputWrapperWidth?: string
  inputWrapperHeight?: string
  height?: string
  required?: boolean
  checked?: boolean
  defaultChecked?: boolean
  secured?: boolean
  disabled?: boolean
  invalid?: boolean
  borders?: string
//   borderColorDefault?: InputBorderColors
//   borderColorHovered?: InputBorderColors
//   borderColorPressed?: InputBorderColors
//   borderColorInvalid?: InputBorderColors
//   backgroundColorDefault?: InputBackgroundColors
//   backgroundColorHovered?: InputBackgroundColors
//   backgroundColorPressed?: InputBackgroundColors
//   actionButtonColorDefault?: ActionButtonColors
//   actionButtonColorHovered?: ActionButtonColors
//   actionButtonColorPressed?: ActionButtonColors
//   actionButtonPaddings?: IActionButtonProps['paddings']
//   actionButtonPosition?: InputActionButtonPosition
//   actionButtonIndent?: InputActionButtonIndent
  autoComplete?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
}

export const Input = ({
  type = 'text',
  name = '',
  placeholder = '',
  placeholderColor = COLORS.NEW_SURFACE_ON_SURFACE_2,
  label = '',
  colorDefault = COLORS.NEW_SURFACE_5,
  required = true,
  height = '',
//   paddings = InputPaddings.SIZE_20,
//   backgroundColorDefault = InputBackgroundColors.SURFACE_OPACITY_3,
  borders = '1px',
//   borderColorDefault = InputBorderColors.BORDER_2,
//   borderColorHovered = InputBorderColors.BORDER_6,
//   borderColorPressed = InputBorderColors.BORDER_4,
  inputWrapperWidth = '100%',
  inputWrapperHeight = '48px',
corners = '3px',
//   autoComplete,
}): JSX.Element => {
  return (
    <Block justify='center' gap={2}>
      <Typography size={12} color={COLORS.NEW_SURFACE_5}>{label}</Typography>
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
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        colorDefault={colorDefault}
        // colorDisabled={colorDisabled}
        inputHeight={height}
        // paddings={paddings}
        corners={corners}
        required={required}
        // checked={checked}
        // defaultChecked={defaultChecked}
        // disabled={disabled}
        // invalid={invalid}
        borders={borders}
        // borderColorDefault={borderColorDefault}
        // borderColorHovered={borderColorHovered}
        // borderColorPressed={borderColorPressed}
        // borderColorInvalid={borderColorInvalid}
        // backgroundColorDefault={backgroundColorDefault}
        // backgroundColorHovered={backgroundColorHovered}
        // backgroundColorPressed={backgroundColorPressed}
        // icon={icon}
        // actionButtonPosition={actionButtonPosition}
        // onChange={onChange}
        // onBlur={onBlur}
        // onKeyDown={onKeyDown}
        // autoComplete={autoComplete}
        // autoFocus={autoFocus}
      />
    </Block>
  )
}
