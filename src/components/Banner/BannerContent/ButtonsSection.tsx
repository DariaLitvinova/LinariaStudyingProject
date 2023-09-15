import {
  BTN_TITLE_DETAILS,
  BTN_TITLE_WATCH,
} from '../../../constants/constants'
import ActionButton from '../../Buttons/ActionButton'
import PrimaryButton from '../../Buttons/PrimaryButton'
import SecondaryButton from '../../Buttons/SecondaryButton'
import HeartIcon from '../../Icons/HeartIcon'
import InfoIcon from '../../Icons/InfoIcon'
import PlayIcon from '../../Icons/PlayIcon'
import { Block } from '../../LinariaComponents/Block'

const ButtonsSection = () => {
  return (
    <Block gap={16} orientation='horizontal'>
      <PrimaryButton text={BTN_TITLE_WATCH}>
        <PlayIcon />
      </PrimaryButton>

      <SecondaryButton text={BTN_TITLE_DETAILS}>
        <InfoIcon />
      </SecondaryButton>
      
      <ActionButton>
        <HeartIcon />
      </ActionButton>
    </Block>
  )
}

export default ButtonsSection
