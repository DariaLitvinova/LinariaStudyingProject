import { styled } from '@linaria/react'

interface AvatarProps {
  padding?: string
  display?: string
  width?: string
  height?: string
  url?: string
  radius?: number
  border?: string
}

export const Avatar = styled.div<AvatarProps>`
  box-sizing: border-box;
  width: ${({ width = '64px' }) => width};
  height: ${({ height = '64px' }) => height};
  display: ${({ display = 'flex' }) => display};
  justify-content: center;
  align-items: center;
  background: var(--new-surface-surface-4);
  background-image: ${({ url = 'src/assets/images/pictogram.png' }) =>
    `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ radius = 64 }) => radius}px;
  border: ${({ border = '1px solid var(--new-outline-border-3)' }) => border};
`
