import { CREATOR_USERNAME, USER_ROLE } from '../../../constants/constants'
import { Avatar } from '../../LinariaComponents/Avatar'
import { Block } from '../../LinariaComponents/Block'
import { Typography } from '../../LinariaComponents/Typography'

const CreatorSection = () => {
  return (
    <Block gap={16} align='center' orientation='horizontal'>
      <Avatar />
      <Block gap={8} align='flex-start'>
        <Typography
          lineHeight='24px'
          weight='400'
          color='var(--new-on-surface-on-surface-2)'
        >
          {USER_ROLE}
        </Typography>
        <Typography lineHeight='32px' weight='700' size={24}>
          {CREATOR_USERNAME}
        </Typography>
      </Block>
    </Block>
  )
}

export default CreatorSection
