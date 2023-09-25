import { styled } from '@linaria/react'
import { type IModalFormProps } from './ModalForm'

export const ModalFormSC = styled.form<
  Omit<IModalFormProps, 'width' | 'height'> & {
    blockWidth?: string
    blockHeight?: string
    backgroundColor?: string
  }
>`
  display: flex;
  padding: 32px;
  gap: 5px;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'initial'};
  width: ${({ blockWidth }) => blockWidth ?? 'initial'};
  height: ${({ blockHeight }) => blockHeight ?? 'initial'};
  flex-direction: ${({ direction }) => direction ?? 'initial'};
  align-items: ${({ alignItems }) => alignItems ?? 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'initial'};
  flex-wrap: ${({ wrap }) => wrap ?? 'initial'};
  border-radius: 32px;
`
