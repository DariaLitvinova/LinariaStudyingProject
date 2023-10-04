import { COLORS } from '../../style_variables/COLORS'
import { ButtonSC } from './Button.styled'
import { ButtonText } from './ButtonText'

interface ISecondaryButtonProps {
  children?: JSX.Element
  text: string
}

const SecondaryButton = ({ children, text }: ISecondaryButtonProps) => {
  return (
    <ButtonSC
      gap='8px'
      height='52px'
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
    </ButtonSC>
  )
}

export default SecondaryButton
