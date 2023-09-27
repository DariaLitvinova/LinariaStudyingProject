import { styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

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
  backgroundColorDisabled: string
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
  background: ${({ backgroundColor }) => `var(${backgroundColor})`};
  :hover {
    background: ${({ backgroundColorHover }) => `var(${backgroundColorHover})`};
  }
  :active {
    background: ${({ backgroundColorActive }) =>
      `var(${backgroundColorActive})`};
  }
  :disabled {
    background: ${({ backgroundColorDisabled }) =>
      `var(${backgroundColorDisabled})`};
  }
  span {
    color: ${({
      disabled,
      color = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})`,
    }) => (disabled ? `var(${COLORS.NEW_SURFACE_ON_SURFACE_2})` : color)};
    :hover {
      color: ${({ colorHover = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})` }) =>
        colorHover};
    }
    :active {
      color: ${({ colorActive = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})` }) =>
        colorActive};
    }
  }
`

export const SquareButton = styled(Button)`
  border-radius: 5px;
`
