import * as React from 'react'
import { Block } from '../Block'
import { Orientation, JustifyContent } from './RadioButtonGroup.h'
import { Typography } from '../Typography'
import { COLORS } from '../../../style_variables/COLORS'

export interface IRadioButtonGroupProps {
  children: React.ReactNode
  width?: string
  gap?: number
  radioGap?: number
  padding?: string
  wrap?: boolean
  orientation?: Orientation
  radioOrientation?: Orientation
  justifyContent?: JustifyContent
  maxHeight?: number
  className?: string
  title?: string
}

export const RadioButtonGroup = ({
  children,
  width,
  gap = 30,
  radioGap = 20,
  wrap,
  orientation = Orientation.Row,
  radioOrientation = Orientation.Row,
  justifyContent = JustifyContent.SpaceBetween,
  padding = '10px',
  title = '',
}: IRadioButtonGroupProps): JSX.Element => (
  <Block
    width={width}
    orientation={orientation}
    justify={justifyContent}
    gap={gap}
    align='center'
    padding={padding}
    wrap={wrap}
  >
    {title && (
      <Typography size={12} color={COLORS.NEW_SURFACE_5}>
        {title}
      </Typography>
    )}
    <Block width='auto' orientation={radioOrientation} gap={radioGap}>
      {children}
    </Block>
  </Block>
)
