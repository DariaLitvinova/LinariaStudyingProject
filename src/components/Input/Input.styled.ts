import { styled } from '@linaria/react'
import { IInputProps } from './Input'

interface IInputSC extends IInputProps {
  inputHeight?: string
}

export const InputSC = styled.input<IInputSC>`
  width: 100%;
  box-sizing: border-box;
  height: ${({ inputHeight }) => inputHeight || 'auto'};
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  color: ${({ disabled, colorDefault, placeholderColor }) =>
    disabled ? `var(${placeholderColor})` : `var(${colorDefault})`};
  border: ${({ borders }) =>
    borders ? `${borders} solid transparent` : 'initial'};
  border-width: ${({ borders }) => borders || 'initial'};
  border-color: ${({ invalid, borderColorDefault, borderColorInvalid }) =>
    invalid ? `var(${borderColorInvalid})` : `var(${borderColorDefault})`};
  border-style: solid;
  padding: 14px 10.5px;
  border-radius: ${({ corners = '3px' }) => corners};
  cursor: pointer;
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? `var(${placeholderColor})` : 'inherit'};
  }
`
