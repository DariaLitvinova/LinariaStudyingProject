import { styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

interface IHeadlineProps {
  color?: string
  size?: number
  fontStyle?: string
  weight?: string
  lineHeight?: string
}

export const HeadlineSC = styled.h1<IHeadlineProps>`
  color: ${({ color = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})` }) => color};
  font-family: 'Plus Jakarta Sans';
  font-size: ${({ size = 44 }) => size}px;
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
  font-weight: ${({ weight = 'normal' }) => weight};
  line-height: ${({ lineHeight = 'normal' }) => lineHeight};
  margin: 0;
`
