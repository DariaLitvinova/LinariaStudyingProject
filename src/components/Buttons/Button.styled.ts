import { styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

interface IButtonProps {
  display?: string
  height?: string
  gap?: string
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
  fontColor?: string
  fontColorHover?: string
  fontColorActive?: string
}

export const ButtonSC = styled.button<IButtonProps>`
  display: ${({ display = 'inline-flex' }) => display};
  width: ${({ width = '' }) => width};
  height: ${({ height = 'auto' }) => height};
  gap: ${({ gap = '0' }) => gap};
  padding: ${({ padding = '0' }) => padding};
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
      fontColor = `${COLORS.NEW_SURFACE_ON_SURFACE_1}`,
    }) => (disabled ? `var(${COLORS.NEW_SURFACE_ON_SURFACE_2})` : `var(${fontColor})`)};
    :hover {
      color: ${({ fontColorHover = `${COLORS.NEW_SURFACE_ON_SURFACE_1}` }) =>
        `var(${fontColorHover})`};
    }
    :active {
      color: ${({ fontColorActive = `${COLORS.NEW_SURFACE_ON_SURFACE_1}` }) =>
        `var(${fontColorActive})`};
    }
  }
`

export const SquareButtonSC = styled(ButtonSC)`
  border-radius: 5px;
`
