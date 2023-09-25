import { styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

export const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 100px;
  background: var(${COLORS.NEW_SURFACE_ON_SURFACE_2});
`
