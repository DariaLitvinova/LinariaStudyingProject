import { Button } from '../LinariaComponents/Button'
import { ButtonText } from '../LinariaComponents/ButtonText'

interface PrimaryButtonProps {
  children?: JSX.Element
  text: string
}

const PrimaryButton = ({ children, text }: PrimaryButtonProps) => {
  return (
    <Button
      display='inline-flex'
      gap={8}
      height={52}
      padding='0px 24px'
      backgroundColor='var(--new-primary-primary-gradient)'
      backgroundColorHover='var(--new-primary-primary-gradient-hover)'
      backgroundColorActive='var(--new-primary-primary-gradient-pressed)'
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </Button>
  )
}

export default PrimaryButton
