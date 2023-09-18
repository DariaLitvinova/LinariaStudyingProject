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
  width?: string
  border?: string
  color?: string
  colorHover?: string
  colorActive?: string
}

export const Button = styled.button<ButtonProps>`
  display: ${({ display = 'flex' }) => display};
  width: ${({ width = '' }) => width};
  height: ${({ height = 0 }) => height}px;
  gap: ${({ gap = 0 }) => gap}px;
  padding: ${({ padding = 0 }) => padding};
  border-radius: ${({ borderRadius = '52px' }) => borderRadius};
  border: ${({ border = 'none' }) => border};
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
  span {
    color: ${({ color = 'var(--new-on-surface-on-surface-1' }) => color};
    :hover {
      color: ${({ colorHover = 'var(--new-on-surface-on-surface-1' }) =>
        colorHover};
    }
    :active {
      color: ${({ colorActive = 'var(--new-on-surface-on-surface-1' }) =>
        colorActive};
    }
  }
`

export const SquareButton = styled(Button)`
  border-radius: 0px;
`;
