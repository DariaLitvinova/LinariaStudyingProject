import { styled } from '@linaria/react'

interface MainThemeProps {
  backgroundColor?: string
}

export const MainTheme = styled.div<MainThemeProps>`
  background-color: ${({ backgroundColor = 'var(--linaria-1)' }) =>
    backgroundColor};
  min-width: 1920px;
  height: 100px;
`
