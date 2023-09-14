import { styled } from '@linaria/react'

export const GradientText = styled.span`
  font-weight: 600;
  @supports (background-clip: text) {
    background-image: linear-gradient(
      0.25turn,
      var(--linaria-1),
      var(--linaria-2)
    );
    background-clip: text;
    color: transparent;
  }
`
