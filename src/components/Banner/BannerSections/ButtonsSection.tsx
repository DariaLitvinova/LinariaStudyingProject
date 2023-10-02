import { useState } from 'react'
import { BTN_TITLES } from '../../../constants/constants'
import ActionButton from '../../Buttons/ActionButton'
import PrimaryButton from '../../Buttons/PrimaryButton'
import SecondaryButton from '../../Buttons/SecondaryButton'
import HeartIcon from '../../Icons/HeartIcon'
import InfoIcon from '../../Icons/InfoIcon'
import PlayIcon from '../../Icons/PlayIcon'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { Orientation } from '../../../style_variables/CSS_PROPERTIES'

const ButtonsSection = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const actionIcon = ({ isActive }: { isActive: boolean }) => (
    <HeartIcon isActive={isActive} />
  )

  return (
    <WrapperSC gap='16px' orientation={Orientation.Row}>
      <PrimaryButton text={BTN_TITLES.Watch}>
        <PlayIcon />
      </PrimaryButton>

      <SecondaryButton text={BTN_TITLES.Details}>
        <InfoIcon />
      </SecondaryButton>

      <ActionButton isActive={isFavourite} setIsActive={setIsFavourite}>
        {actionIcon({ isActive: isFavourite })}
      </ActionButton>
    </WrapperSC>
  )
}

export default ButtonsSection
