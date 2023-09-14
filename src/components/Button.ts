import { styled } from '@linaria/react'

export const Button = styled.button`
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  border: 1px var(--linaria-2) solid;
  color: var(--text);

  background-color: #222;
  :hover {
    background-color: #333;
  }
  :active {
    background-color: #444;
  }
`
