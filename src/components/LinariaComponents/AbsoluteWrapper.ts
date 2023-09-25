import { styled } from '@linaria/react'

interface AbsoluteWrapperProps {
  orientation?: 'vertical' | 'horizontal'
  gap?: number
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  margin?: string
  url?: string
  top?: string
  bottom?: string
  right?: string
  left?: string
}

export const AbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
  margin: ${({ margin = '0' }) => margin};
  display: ${({ display = 'flex' }) => display};
  position: absolute;
  top: ${({ top = '' }) => top};
  bottom: ${({ bottom = '' }) => bottom};
  right: ${({ right = '' }) => right};
  left: ${({ left = '' }) => left};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = 'vertical' }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ gap = 0 }) => gap}px;
  align-items: ${({ align = 'center' }) => align};
`