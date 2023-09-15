import { useState } from 'react'
import { Button } from '../LinariaComponents/Button'

interface ActionButtonProps {
    children: JSX.Element
  }

const ActionButton = ({children}: ActionButtonProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  
  return (
    <Button
      gap={8}
      height={52}
      width='52px'
      backgroundColor='var(--new-surface-surface-opacity-3)'
      backgroundColorHover='var(--new-surface-surface-3)'
      backgroundColorActive='var(--new-surface-surface-opacity-2)'
    >
      {children}
    </Button>
  )
}

export default ActionButton
