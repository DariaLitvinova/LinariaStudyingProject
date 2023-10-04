import { styled } from '@linaria/react'
import { COLORS } from '../../style_variables/COLORS'

interface IAvatarProps {
  padding?: string
  display?: string
  width?: string
  height?: string
  url?: string
  radius?: string
  border?: string
}

export const AvatarSC = styled.div<IAvatarProps>`
  box-sizing: border-box;
  width: ${({ width = '64px' }) => width};
  height: ${({ height = '64px' }) => height};
  display: ${({ display = 'flex' }) => display};
  justify-content: center;
  align-items: center;
  background: var(${COLORS.NEW_SURFACE_4});
  background-image: ${({ url = 'src/assets/images/pictogram.png' }) =>
    `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ radius = '64px' }) => radius};
  border: ${({ border = `1px solid var(${COLORS.NEW_OUTLINE_BORDER})` }) => border};
`
