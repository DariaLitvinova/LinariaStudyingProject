import { styled } from '@linaria/react'
import { IDropdownProps } from './Dropdown'

interface IDropdownSC extends IDropdownProps {
  inputHeight?: string
}

export const DropdownSC = styled.select<IDropdownSC>`
  width: 100%;
  box-sizing: border-box;
  height: ${({ inputHeight }) => inputHeight || 'auto'};
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  color: ${({ value, colorDefault, placeholderColor }) =>
    value ? `var(${colorDefault})` : `var(${placeholderColor})`};
  border: ${({ borders }) =>
    borders ? `var(${borders}) solid transparent` : 'initial'};
  border-width: ${({ borders }) => borders || 'initial'};
  border-color: ${({ invalid, borderColorDefault, borderColorInvalid }) =>
    invalid ? `var(${borderColorInvalid})` : `var(${borderColorDefault})`};
  border-style: solid;
  padding: 14px 10.5px;
  border-radius: ${({ corners = '3px' }) => corners};
  cursor: pointer;
  appearance: none;
  background: url('src/assets/images/icons/chevron-down.svg') no-repeat right;
  background-size: 20px;
  background-position-x: calc(100% - 8px);
`
