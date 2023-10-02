import { styled } from '@linaria/react'
import { Orientation } from '../../style_variables/CSS_PROPERTIES'

interface IAbsoluteWrapperProps {
  orientation?: Orientation
  gap?: string
  align?: string
  justify?: string
  padding?: string
  display?: string
  width?: string
  margin?: string
  url?: string
  top?: string
  bottom?: string
  right?: string
  left?: string
}

export const AbsoluteWrapperSC = styled.div<IAbsoluteWrapperProps>`
  margin: ${({ margin = '0' }) => margin};
  display: ${({ display = 'flex' }) => display};
  position: absolute;
  top: ${({ top = '' }) => top};
  bottom: ${({ bottom = '' }) => bottom};
  right: ${({ right = '' }) => right};
  left: ${({ left = '' }) => left};
  justify-content: ${({ justify = 'start' }) => justify};
  padding: ${({ padding = 0 }) => padding};
  flex-direction: ${({ orientation = Orientation.Column }) =>
    orientation === Orientation.Row ? 'row' : 'column'};
  gap: ${({ gap = '0' }) => gap};
  align-items: ${({ align = 'center' }) => align};
`