import { CSSProperties, ReactNode, SyntheticEvent } from 'react'
import {
  FormAlignItems,
  FormDirection,
  FormJustifyContent,
  FormWrap,
} from './ModalForm.h'
import { ModalFormSC } from './ModalForm.styled'
import { COLORS } from '../../../style_variables/COLORS'

export interface IModalFormProps {
  children: ReactNode
  width?: string
  height?: string
  direction?: FormDirection
  justifyContent?: FormJustifyContent
  alignItems?: FormAlignItems
  wrap?: FormWrap
  autoComplete?: string
  className?: string 
  style?: CSSProperties
  backgroundColor?: string
  onSubmit: (e: SyntheticEvent) => void
}

export const ModalForm = ({
  children,
  width,
  height,
  direction = FormDirection.Column,
  justifyContent = FormJustifyContent.Center,
  alignItems = FormAlignItems.Center,
  wrap = FormWrap.Nowrap,
  autoComplete = 'off',
  className = '',
  backgroundColor = `var(${COLORS.NEW_SURFACE_ON_SURFACE_1})`,
  style,
  onSubmit,
}: IModalFormProps): JSX.Element => (
  <ModalFormSC
    blockWidth={width}
    blockHeight={height}
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    wrap={wrap}
    onSubmit={onSubmit}
    autoComplete={autoComplete}
    className={className}
    backgroundColor={backgroundColor}
    style={style}
  >
    {children}
  </ModalFormSC>
)
