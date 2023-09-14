import { styled } from '@linaria/react'

interface ButtonProps {
  display?: string
  height?: number
  gap?: number
  padding?: string
  borderRadius?: string
  justify?: string
  align?: string
  cursor?: string
  backgroundColor: string
  backgroundColorHover: string
  backgroundColorActive: string
}

export const Button = styled.button<ButtonProps>`
  display: ${({ display = 'flex' }) => display};
  height: ${({ height = 0 }) => height}px;
  gap: ${({ gap = 0 }) => gap}px;
  padding: ${({ padding = 0 }) => padding};
  border-radius: ${({ borderRadius = '52px' }) => borderRadius};
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  cursor: ${({ cursor = 'pointer' }) => cursor};
  background: ${({ backgroundColor }) => backgroundColor};
  :hover {
    background: ${({ backgroundColorHover }) => backgroundColorHover};
  }
  :active {
    background: ${({ backgroundColorActive }) => backgroundColorActive};
  }
`
