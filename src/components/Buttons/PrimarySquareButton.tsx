import { CSSProperties } from '@linaria/core'
import { COLORS } from '../../style_variables/COLORS'
import { SquareButton } from '../LinariaComponents/Button'
import { ButtonText } from '../LinariaComponents/ButtonText'

interface PrimaryButtonProps {
  children?: JSX.Element | null
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  style?: CSSProperties
  disabled?: boolean
}

const PrimarySquareButton = ({
  children,
  text,
  onClick,
  type = 'button',
  style,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <SquareButton
      type={type}
      display='inline-flex'
      gap={8}
      height={52}
      padding='0px 24px'
      backgroundColor={COLORS.NEW_PRIMARY_GRADIENT}
      backgroundColorHover={COLORS.NEW_PRIMARY_GRADIENT_HOVER}
      backgroundColorActive={COLORS.NEW_PRIMARY_GRADIENT_PRESSED}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
      <ButtonText lineHeight='24px' weight='700'>
        {text}
      </ButtonText>
    </SquareButton>
  )
}

export default PrimarySquareButton
