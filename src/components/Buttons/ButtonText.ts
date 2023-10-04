import { styled } from '@linaria/react'

interface IButtonTextProps {
  size?: number
  style?: string
  weight?: string
  lineHeight?: string
}

export const ButtonText = styled.span<IButtonTextProps>`
  font-family: 'Plus Jakarta Sans';
  font-size: ${({ size = 16 }) => size}px;
  font-style: ${({ style = "normal" }) => style};
  font-weight: ${({ weight = "normal" }) => weight};
  line-height: ${({ lineHeight = "normal" }) => lineHeight};
`
