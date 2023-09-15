import { useState } from 'react'
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
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const actionIcon = ({ isActive }: { isActive: boolean }) => (
    <HeartIcon isActive={isActive} />
  )

  return (
    <Block gap={16} orientation='horizontal'>
      <PrimaryButton text={BTN_TITLE_WATCH}>
        <PlayIcon />
      </PrimaryButton>

      <SecondaryButton text={BTN_TITLE_DETAILS}>
        <InfoIcon />
      </SecondaryButton>

      <ActionButton isActive={isFavourite} setIsActive={setIsFavourite}>
        {actionIcon({ isActive: isFavourite })}
      </ActionButton>
    </Block>
  )
}

export default ButtonsSection
