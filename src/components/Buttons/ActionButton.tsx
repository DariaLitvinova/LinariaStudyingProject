import { COLORS } from '../../style_variables/COLORS'
import { ButtonSC } from './Button.styled'

interface IActionButtonProps {
  isActive: boolean
  setIsActive: (newState: boolean) => void
  children: JSX.Element
}

const ActionButton = ({
  isActive,
  setIsActive,
  children,
}: IActionButtonProps) => {
  return (
    <ButtonSC
      gap='8px'
      height='52px'
      width='52px'
      backgroundColor={COLORS.NEW_SURFACE_OPACITY_3}
      backgroundColorHover={COLORS.NEW_SURFACE_3}
      backgroundColorActive={COLORS.NEW_SURFACE_OPACITY_2}
      onClick={() => setIsActive(!isActive)}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
    >
      {children}
    </ButtonSC>
  )
}

export default ActionButton
