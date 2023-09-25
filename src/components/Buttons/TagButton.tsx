import { COLORS } from '../../style_variables/COLORS'
import { Button } from '../LinariaComponents/Button'
import { ButtonText } from '../LinariaComponents/ButtonText'

interface TagButtonProps {
  text: string
}

const TagButton = ({ text }: TagButtonProps) => {
  return (
    <Button
      display='inline-flex'
      gap={10}
      backgroundColor='transparent'
      backgroundColorHover='transparent'
      backgroundColorActive='transparent'
      color={`var(${COLORS.NEW_SURFACE_ON_SURFACE_2})`}
      colorActive={`var(${COLORS.NEW_SURFACE_ON_SURFACE_3})`}
    >
      <ButtonText
        lineHeight='16px'
        weight='700'
        size={12}
      >
        {text}
      </ButtonText>
    </Button>
  )
}

export default TagButton
