import { COLORS } from '../../style_variables/COLORS'
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
      backgroundColor={COLORS.NEW_PRIMARY_GRADIENT}
      backgroundColorHover={COLORS.NEW_PRIMARY_GRADIENT_HOVER}
      backgroundColorActive={COLORS.NEW_PRIMARY_GRADIENT_PRESSED}
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </Button>
  )
}

export default PrimaryButton
