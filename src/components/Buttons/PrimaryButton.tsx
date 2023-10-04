import { COLORS } from '../../style_variables/COLORS'
import { ButtonSC } from './Button.styled'
import { ButtonText } from './ButtonText'

interface IPrimaryButtonProps {
  children?: JSX.Element
  text: string
}

const PrimaryButton = ({ children, text }: IPrimaryButtonProps) => {
  return (
    <ButtonSC
      gap='8px'
      height='52px'
      padding='0px 24px'
      backgroundColor={COLORS.NEW_PRIMARY_GRADIENT}
      backgroundColorHover={COLORS.NEW_PRIMARY_GRADIENT_HOVER}
      backgroundColorActive={COLORS.NEW_PRIMARY_GRADIENT_PRESSED}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </ButtonSC>
  )
}

export default PrimaryButton
