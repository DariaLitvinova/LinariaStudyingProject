import { styled } from '@linaria/react'

interface ILayerModalFixedSC {
  overlayFullColor?: string
}

export const LayerModalFixedSC = styled.div<ILayerModalFixedSC>`
  background-color: ${({ overlayFullColor = '' }) => `var(${overlayFullColor})`};
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  overflow-y: auto;
`
