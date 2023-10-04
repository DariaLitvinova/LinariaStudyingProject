import { COLORS } from '../../style_variables/COLORS'
import { SquareButtonSC } from './Button.styled'
import { ButtonText } from './ButtonText'

interface IPrimaryButtonProps {
  children?: JSX.Element | null
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const PrimarySquareButton = ({
  children,
  text,
  onClick,
  type = 'button',
  disabled,
}: IPrimaryButtonProps) => {
  return (
    <SquareButtonSC
      type={type}
      gap='8px'
      height='52px'
      padding='0px 24px'
      backgroundColor={COLORS.NEW_PRIMARY_GRADIENT}
      backgroundColorHover={COLORS.NEW_PRIMARY_GRADIENT_HOVER}
      backgroundColorActive={COLORS.NEW_PRIMARY_GRADIENT_PRESSED}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </SquareButtonSC>
  )
}

export default PrimarySquareButton
