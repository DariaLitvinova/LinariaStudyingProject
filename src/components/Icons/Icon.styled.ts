import { styled } from '@linaria/react'

interface IIconProps {
  width?: number
  height?: number
  url: string
}

export const IconSC = styled.div<IIconProps>`
  width: ${({ width = '24' }) => width}px;
  height: ${({ height = '24' }) => height}px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
`
