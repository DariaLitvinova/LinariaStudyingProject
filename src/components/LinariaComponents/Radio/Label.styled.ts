import { COLORS } from './../../../style_variables/COLORS'
import { styled } from '@linaria/react'
import { IRadioButtonProps } from './RadioButton'

export const LabelSC = styled.label<Omit<IRadioButtonProps, 'selectedValue'>>`
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  color: ${({ invalid, disabled }) =>
    disabled
      ? `var(${COLORS.NEW_SURFACE_ON_SURFACE_2})`
      : invalid
      ? `var(${COLORS.ERROR})`
      : `var(${COLORS.NEW_SURFACE_3})`};
`

export const InputSC = styled.input`
  margin: 0;
`
