import { styled } from '@linaria/react'

interface BannerProps {
  orientation?: 'vertical' | 'horizontal'
  gap?: number
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  maxWidth?: number
  height?: number
  margin?: string
}

export const Banner = styled.div<BannerProps>`
  width: ${({ width = '100%' }) => width};
  max-width: ${({ maxWidth = 0 }) => maxWidth}px;
  margin: ${({ margin = '0' }) => margin};
  height: ${({ height = 0 }) => height}px;
  display: ${({ display = 'flex' }) => display};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = 'vertical' }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ gap = 0 }) => gap}px;
  align-items: ${({ align = 'start' }) => align};
  background-image: url(../assets/horizontal-tenet.png);
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
