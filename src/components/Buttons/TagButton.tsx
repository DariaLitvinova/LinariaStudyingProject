import { COLORS } from '../../style_variables/COLORS'
import { ButtonSC } from './Button.styled'
import { ButtonText } from './ButtonText'

interface ITagButtonProps {
  text: string
}

const TagButton = ({ text }: ITagButtonProps) => {
  return (
    <ButtonSC
      gap='10px'
      backgroundColor='transparent'
      backgroundColorHover='transparent'
      backgroundColorActive='transparent'
      fontColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
      fontColorActive={COLORS.NEW_SURFACE_ON_SURFACE_3}
      backgroundColorDisabled={COLORS.NEW_SURFACE_3}
    >
      <ButtonText lineHeight='16px' weight='700' size={12}>
        {text}
      </ButtonText>
    </ButtonSC>
  )
}

export default TagButton
