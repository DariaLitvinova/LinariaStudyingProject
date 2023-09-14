import { styled } from '@linaria/react'

interface StackProps {
  orientation?: 'vertical' | 'horizontal'
  gap?: number
  align?: 'center' | 'start' | 'end'
  justify?: 'center' | 'start' | 'end'
  stretch?: boolean
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ orientation = 'vertical' }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ gap = 0 }) => gap}rem;
  align-items: ${({ align = 'start' }) => align};
  justify-content: ${({ justify = 'start' }) => justify};
  height: ${({ stretch }) => (stretch ? '100%' : 'auto')};
`
