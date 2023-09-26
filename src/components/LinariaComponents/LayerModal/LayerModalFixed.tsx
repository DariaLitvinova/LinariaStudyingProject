import { ReactNode } from 'react'
import { CSSProperties } from '@linaria/react'
import { LayerModalFixedSC } from './LayerModalFixed.styled'
import { OverlayLayoutColors } from './LayerModal.h'
import { Block } from '../Block'

export interface ILayerModal {
  children: ReactNode | ReactNode[]
  wrapperId?: string
  className?: string
  style?: CSSProperties
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
  style,
  ...rest
}: ILayerModal): JSX.Element => {
  return (
    <>
      {isOpened && (
        <LayerModalFixedSC
          overlayFullColor={overlayFullColor}
          style={style}
          {...rest}
        >
          <Block
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
