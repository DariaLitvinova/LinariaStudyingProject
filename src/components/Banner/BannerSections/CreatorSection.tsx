import { CREATOR_USERNAME, USER_ROLE } from '../../../constants/constants'
import { COLORS } from '../../../style_variables/COLORS'
import { AvatarSC } from '../../Avatar/Avatar.styled'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { TypographySC } from '../../Typography/Typography.styled'
import {
  AlignItems,
  Orientation,
} from '../../../style_variables/CSS_PROPERTIES'

const CreatorSection = () => {
  return (
    <WrapperSC
      gap='16px'
      align={AlignItems.Center}
      orientation={Orientation.Row}
    >
      <AvatarSC />
      <WrapperSC gap='8px' align={AlignItems.FlexStart}>
        <TypographySC
          lineHeight='24px'
          weight='400'
          color={COLORS.NEW_SURFACE_ON_SURFACE_2}
        >
          {USER_ROLE}
        </TypographySC>
        <TypographySC lineHeight='32px' weight='700' size={24}>
          {CREATOR_USERNAME}
        </TypographySC>
      </WrapperSC>
    </WrapperSC>
  )
}

export default CreatorSection
