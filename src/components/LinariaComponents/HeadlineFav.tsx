import { styled } from '@linaria/react'

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

interface HeadlineFavProps {
  children?: string
  style: {
    [key: string]: string
  }
}

export function HeadlineFav({ children, style }: HeadlineFavProps) {
  return <Title style={style}>{children}</Title>
}
