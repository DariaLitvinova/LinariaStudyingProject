import { styled } from '@linaria/react'

interface TypographyProps {
  color?: string
  size?: number
  style?: string
  weight?: string
  lineHeight?: string
  height?: string
  display?: string
  overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'inherit'
  lineClamp?: string
  boxOrient?: string
  minWidth?: string 
}

export const Typography = styled.p<TypographyProps>`
  margin: 0;
  min-width: ${({ minWidth = '' }) => minWidth};
  color: ${({ color = 'var(--new-on-surface-on-surface-1' }) => color};
  font-family: 'Plus Jakarta Sans';
  font-size: ${({ size = 16 }) => size}px;
  font-style: ${({ style = 'normal' }) => style};
  font-weight: ${({ weight = 'normal' }) => weight};
  line-height: ${({ lineHeight = 'normal' }) => lineHeight};
  height: ${({ height = 'auto' }) => height};
  display: ${({ display = 'block' }) => display};
  -webkit-line-clamp: ${({ lineClamp = '' }) => lineClamp};
  -webkit-box-orient: ${({ boxOrient = '' }) => boxOrient};
  overflow: ${({ overflow = 'visible' }) => overflow};
`
