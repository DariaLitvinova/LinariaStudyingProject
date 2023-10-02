import { COLORS } from '../../style_variables/COLORS'
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
      backgroundColor={COLORS.NEW_SURFACE_OPACITY_3}
      backgroundColorHover={COLORS.NEW_SURFACE_3}
      backgroundColorActive={COLORS.NEW_SURFACE_OPACITY_2}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </Button>
  )
}

export default SecondaryButton
