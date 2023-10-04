import * as React from 'react'
import {
  Orientation,
  JustifyContent,
} from '../../style_variables/CSS_PROPERTIES'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
import {
  ErrorTypographySC,
  TypographySC,
} from '../Typography/Typography.styled'
import { COLORS } from '../../style_variables/COLORS'

export interface IRadioButtonGroupProps {
  children: React.ReactNode
  width?: string
  gap?: string
  radioGap?: string
  padding?: string
  wrap?: boolean
  orientation?: Orientation
  radioOrientation?: Orientation
  justifyContent?: JustifyContent
  maxHeight?: number
  className?: string
  title?: string
  errorText?: string
}

export const RadioButtonGroup = ({
  children,
  width,
  gap = '5px',
  radioGap = '20px',
  wrap,
  orientation = Orientation.Column,
  radioOrientation = Orientation.Row,
  justifyContent = JustifyContent.SpaceBetween,
  padding = '10px',
  title = '',
  errorText,
}: IRadioButtonGroupProps): JSX.Element => (
  <WrapperSC
    width={width}
    orientation={orientation}
    justify={justifyContent}
    gap={gap}
    padding={padding}
    wrap={wrap}
  >
    <WrapperSC
      orientation={Orientation.Row}
      justify={JustifyContent.SpaceBetween}
    >
      {title && (
        <TypographySC size={12} color={COLORS.NEW_SURFACE_5}>
          {title}
        </TypographySC>
      )}
      {errorText && (
        <ErrorTypographySC size={12}>{errorText}</ErrorTypographySC>
      )}
    </WrapperSC>

    <WrapperSC
      width='auto'
      justify={JustifyContent.FlexEnd}
      orientation={radioOrientation}
      gap={radioGap}
    >
      {children}
    </WrapperSC>
  </WrapperSC>
)
