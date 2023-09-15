import { styled } from '@linaria/react'

interface HeadlineProps {
  color?: string
  size?: number
  style?: string
  weight?: string
  lineHeight?: string
}

export const Headline = styled.h1<HeadlineProps>`
  color: ${({ color = 'var(--new-on-surface-on-surface-1' }) => color};
  font-family: 'Plus Jakarta Sans';
  font-size: ${({ size = 44 }) => size}px;
  font-style: ${({ style = 'normal' }) => style};
  font-weight: ${({ weight = 'normal' }) => weight};
  line-height: ${({ lineHeight = 'normal' }) => lineHeight};
  margin: 0;
`
