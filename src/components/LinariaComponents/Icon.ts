import { styled } from '@linaria/react'

interface IconProps {
  width?: number
  height?: number
  url: string
}

export const Icon = styled.div<IconProps>`
  width: ${({ width = '24' }) => width}px;
  height: ${({ height = '24' }) => height}px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
`
