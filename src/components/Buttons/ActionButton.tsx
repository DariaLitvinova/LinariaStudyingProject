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
      backgroundColor='var(--new-surface-surface-opacity-3)'
      backgroundColorHover='var(--new-surface-surface-3)'
      backgroundColorActive='var(--new-surface-surface-opacity-2)'
      onClick={() => setIsActive(!isActive)}
    >
      {children}
    </Button>
  )
}

export default ActionButton
