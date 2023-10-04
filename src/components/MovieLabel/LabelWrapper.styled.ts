import { styled } from '@linaria/react'

interface ILabelWrapperProps {
  height?: number
  padding?: string
  justify?: string
  align?: string
  radius?: number
}

export const LabelWrapperSC = styled.div<ILabelWrapperProps>`
  display: inline-flex;
  height: ${({ height = '24' }) => height}px;
  padding: ${({ padding = '4px 12px' }) => padding};
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  border-radius: ${({ radius = '100' }) => radius}px;
  background: var(--new-surface-surface-4, #252525);
`
