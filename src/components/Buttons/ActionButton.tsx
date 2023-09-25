import { COLORS } from '../../style_variables/COLORS'
import { Button } from '../LinariaComponents/Button'

interface ActionButtonProps {
  isActive: boolean
  setIsActive: (newState: boolean) => void
  children: JSX.Element
}

const ActionButton = ({
  isActive,
  setIsActive,
  children,
}: ActionButtonProps) => {
  return (
    <Button
      gap={8}
      height={52}
      width='52px'
      backgroundColor={COLORS.NEW_SURFACE_OPACITY_3}
      backgroundColorHover={COLORS.NEW_SURFACE_3}
      backgroundColorActive={COLORS.NEW_SURFACE_OPACITY_2}
      onClick={() => setIsActive(!isActive)}
    >
      {children}
    </Button>
  )
}

export default ActionButton
