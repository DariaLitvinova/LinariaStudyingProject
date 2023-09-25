import { styled } from '@linaria/react'
import { IInputProps } from './Input'

interface IInputSC {}

export const InputSC = styled.input<
  IInputProps & {
    inputHeight?: string
  }
>`
  width: 100%;
  box-sizing: border-box;
  height: ${({ inputHeight }) => inputHeight || 'auto'};
  font: 'Plus Jakarta Sans';
  font-size: 16px;
  color: ${({ disabled, colorDisabled, colorDefault }) =>
    disabled
      ? `var(${colorDisabled})`
      : colorDefault
      ? `var(${colorDefault})`
      : 'inherit'};
  background-color: ${({ backgroundColorDefault }) =>
    `var(${backgroundColorDefault})`};
  border: none;
  
  /* Styles for gradient border starts (works with border-radius) */
  border: ${({ borders, borderGradient }) =>
    borders && borderGradient
      ? `var(${borders}) solid transparent`
      : 'initial'};
  background: ${({ backgroundColorDefault, borderGradient }) =>
    backgroundColorDefault && borderGradient
      ? `linear-gradient(var(${backgroundColorDefault}), var(${backgroundColorDefault})) padding-box, var(${borderGradient}) border-box`
      : backgroundColorDefault
      ? `var(${backgroundColorDefault})`
      : 'initial'};

  border-width: ${({ borders }) => borders || 'initial'};
  border-color: ${({ invalid, borderColorDefault, borderColorInvalid }) =>
    invalid ? `var(${borderColorInvalid})` : `var(${borderColorDefault})`};
  border-style: solid;
  padding: 14px 10.5px;
  border-radius: ${({ corners = '3px' }) => corners};
  cursor: pointer;

  &::placeholder {
     color: ${({ disabled, colorDisabled, placeholderColor }) =>
       disabled
         ? `var(${colorDisabled})`
         : placeholderColor
         ? `var(${placeholderColor})`
         : 'inherit'}};
    }

  &:hover {
   background-color: ${({ backgroundColorHovered }) =>
     `var(${backgroundColorHovered})`};
   border-color: ${({ borderColorHovered }) => `var(${borderColorHovered})`};
  }
  
  &:focus {
   background-color: ${({ backgroundColorPressed }) =>
     `var(${backgroundColorPressed})`};
   border-color: ${({ borderColorPressed }) => `var(${borderColorPressed})`};
  }
`
