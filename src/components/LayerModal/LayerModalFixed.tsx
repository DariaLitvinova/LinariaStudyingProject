import { ReactNode } from 'react'
import { CSSProperties } from '@linaria/react'
import { LayerModalFixedSC } from './LayerModalFixed.styled'
import { OverlayLayoutColors } from './LayerModal.h'
import { WrapperSC } from '../Wrapper/Wrapper.styled'

export interface ILayerModal {
  children: ReactNode | ReactNode[]
  wrapperId?: string
  className?: string
  overlayEnabled?: boolean
  overlayFullColor?: OverlayLayoutColors
  onClickForCloseModal?: () => void
  isOpened?: boolean
}

export const LayerModalFixed = ({
  children,
  overlayFullColor = OverlayLayoutColors.SURFACE_OPACITY_2,
  isOpened,
  onClickForCloseModal,
  ...rest
}: ILayerModal): JSX.Element => {
  return (
    <>
      {isOpened && (
        <LayerModalFixedSC
          overlayFullColor={overlayFullColor}
          {...rest}
        >
          <WrapperSC
            height='100%'
            position='fixed'
            onClick={onClickForCloseModal}
          />
          {children}
        </LayerModalFixedSC>
      )}
    </>
  )
}
