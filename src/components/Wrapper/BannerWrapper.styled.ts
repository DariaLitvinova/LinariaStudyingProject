import { styled } from '@linaria/react'
import { Orientation } from '../../style_variables/CSS_PROPERTIES'

interface IBannerWrapperProps {
  orientation?: Orientation
  gap?: string
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  maxWidth?: string
  height?: string
  margin?: string
  url?: string
}

export const BannerWrapperSC = styled.div<IBannerWrapperProps>`
  position: 'relative';
  width: ${({ width = '100%' }) => width};
  max-width: ${({ maxWidth = '0' }) => maxWidth};
  margin: ${({ margin = '0' }) => margin};
  height: ${({ height = '0' }) => height};
  display: ${({ display = 'flex' }) => display};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = Orientation.Column }) =>
    orientation === Orientation.Row ? 'row' : 'column'};
  gap: ${({ gap = '0' }) => gap};
  align-items: ${({ align = 'start' }) => align};
  background-image: ${({ url = '' }) => `url(${url})`};
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
