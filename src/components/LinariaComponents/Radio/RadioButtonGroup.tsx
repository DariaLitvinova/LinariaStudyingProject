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
  errorText?: string
}

export const RadioButtonGroup = ({
  children,
  width,
  gap = 5,
  radioGap = 20,
  wrap,
  orientation = Orientation.Column,
  radioOrientation = Orientation.Row,
  justifyContent = JustifyContent.SpaceBetween,
  padding = '10px',
  title = '',
  errorText,
}: IRadioButtonGroupProps): JSX.Element => (
  <Block
    width={width}
    orientation={orientation}
    justify={justifyContent}
    gap={gap}
    padding={padding}
    wrap={wrap}
  >
    <Block orientation='horizontal' justify='space-between'>
      {title && (
        <Typography size={12} color={COLORS.NEW_SURFACE_5}>
          {title}
        </Typography>
      )}
      {errorText && (
        <Typography size={12} color={COLORS.ERROR}>
          {errorText}
        </Typography>
      )}
    </Block>

    <Block width='auto' justify='end' orientation={radioOrientation} gap={radioGap}>
      {children}
    </Block>
  </Block>
)
