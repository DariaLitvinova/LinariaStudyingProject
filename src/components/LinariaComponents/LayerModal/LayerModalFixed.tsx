import { ReactNode } from 'react'
import { CSSProperties } from '@linaria/react'
import { LayerModalFixedSC } from './LayerModalFixed.styled'
import { OverlayLayoutColors } from './LayerModal.h'

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
  style,
  ...rest
}: ILayerModal): JSX.Element => {
  return (
    <LayerModalFixedSC
      overlayFullColor={overlayFullColor}
      style={style}
      {...rest}
    >
      {children}
    </LayerModalFixedSC>
  )
}
