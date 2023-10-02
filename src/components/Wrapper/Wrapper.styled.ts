import { styled } from '@linaria/react'
import { Orientation } from '../../style_variables/CSS_PROPERTIES'

interface IWrapperProps {
  orientation?: Orientation
  gap?: string
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
  border?: string
  borderRadius?: string
}

export const WrapperSC = styled.div<IWrapperProps>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = 'auto' }) => height};
  background-color: ${({ bgColor = '' }) => `var(${bgColor})`};
  position: ${({ position = 'static' }) => position};
  margin: ${({ margin = '0' }) => margin};
  display: ${({ display = 'flex' }) => display};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = Orientation.Column }) =>
    orientation === Orientation.Row ? 'row' : 'column'};
  gap: ${({ gap = '0' }) => gap};
  z-index: ${({ zIndex = 0 }) => zIndex};
  align-items: ${({ align = 'start' }) => align};
  border: ${({ border = '' }) => border};
  border-radius: ${({ borderRadius = '' }) => borderRadius};
`
