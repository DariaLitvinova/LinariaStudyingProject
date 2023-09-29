import { useState } from 'react'
import { BTN_TITLES } from '../../../constants/constants'
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
      <PrimaryButton text={BTN_TITLES.Watch}>
        <PlayIcon />
      </PrimaryButton>

      <SecondaryButton text={BTN_TITLES.Details}>
        <InfoIcon />
      </SecondaryButton>

      <ActionButton isActive={isFavourite} setIsActive={setIsFavourite}>
        {actionIcon({ isActive: isFavourite })}
      </ActionButton>
    </Block>
  )
}

export default ButtonsSection
