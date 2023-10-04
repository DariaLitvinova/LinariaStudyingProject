import { CSSProperties, styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

interface ITypographyProps {
  color?: string
  size?: number
  fontStyle?: string
  weight?: string
  lineHeight?: string
  height?: string
  display?: string
  overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'inherit'
  lineClamp?: string
  boxOrient?: string
  minWidth?: string
}

export const TypographySC = styled.p<ITypographyProps>`
  margin: 0;
  min-width: ${({ minWidth = '' }) => minWidth};
  color: ${({ color = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})` }) =>
    `var(${color})`};
  font-family: 'Plus Jakarta Sans';
  font-size: ${({ size = 16 }) => size}px;
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
  font-weight: ${({ weight = 'normal' }) => weight};
  line-height: ${({ lineHeight = 'normal' }) => lineHeight};
  height: ${({ height = 'auto' }) => height};
  display: ${({ display = 'block' }) => display};
  -webkit-line-clamp: ${({ lineClamp = '' }) => lineClamp};
  -webkit-box-orient: ${({ boxOrient = '' }) => boxOrient};
  overflow: ${({ overflow = 'visible' }) => overflow};
`

export const ErrorTypographySC = styled(TypographySC)<
  ITypographyProps & { textAlign?: string; width?: string; isBorder?: boolean }
>`
  color: var(${COLORS.ERROR});
  text-align: ${({ textAlign = 'right' }) => textAlign};
  width: ${({ width = '100%' }) => width};
  border: ${({ isBorder = false }) =>
    isBorder ? `1px solid var(${COLORS.ERROR})` : ''};
  padding: ${({ isBorder = false }) => (isBorder ? `10px` : '')};
  border-radius: ${({ isBorder = false }) => (isBorder ? `5px` : '')};
`
