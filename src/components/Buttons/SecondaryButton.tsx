import { Button } from '../LinariaComponents/Button'
import { ButtonText } from '../LinariaComponents/ButtonText'
import { Icon } from '../LinariaComponents/Icon'

interface SecondaryButtonProps {
  children?: JSX.Element
  text: string
}

const SecondaryButton = ({ children, text }: SecondaryButtonProps) => {
  return (
    <Button
      display='inline-flex'
      gap={8}
      height={52}
      padding='0px 24px'
      backgroundColor='var(--new-surface-surface-opacity-3)'
      backgroundColorHover='var(--new-surface-surface-3)'
      backgroundColorActive='var(--new-surface-surface-opacity-2)'
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </Button>
  )
}

export default SecondaryButton
