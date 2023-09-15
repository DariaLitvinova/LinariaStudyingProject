import { styled } from '@linaria/react'

interface BlockProps {
  orientation?: 'vertical' | 'horizontal'
  gap?: number
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  margin?: string
  url?: string
}

export const Block = styled.div<BlockProps>`
  width: ${({ width = '100%' }) => width};
  margin: ${({ margin = '0' }) => margin};
  display: ${({ display = 'flex' }) => display};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = 'vertical' }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ gap = 0 }) => gap}px;
  align-items: ${({ align = 'start' }) => align};
`