import { styled } from '@linaria/react'

interface BlockProps {
  orientation?: 'vertical' | 'horizontal'
  gap?: number
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  height?: string
  margin?: string
  url?: string
  position?: string
  zIndex?: number
  wrap?: boolean
  bgColor?: string
}

export const Block = styled.div<BlockProps>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = 'auto' }) => height};
  background-color: ${({ bgColor = '' }) => `var(${bgColor})`};
  position: ${({ position = 'static' }) => position};
  margin: ${({ margin = '0' }) => margin};
  display: ${({ display = 'flex' }) => display};
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = 'vertical' }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ gap = 0 }) => gap}px;
  z-index: ${({ zIndex = 0 }) => zIndex};
  align-items: ${({ align = 'start' }) => align};
`
