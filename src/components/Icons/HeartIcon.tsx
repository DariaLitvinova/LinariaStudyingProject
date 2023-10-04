import { IconSC } from './Icon.styled'

interface IHeartIconProps {
  isActive: boolean
}

const HeartIcon = ({ isActive }: IHeartIconProps) => {
  if (isActive) {
    return <IconSC url='src/assets/images/icons/heart-fill.svg' />
  }

  return <IconSC url='src/assets/images/icons/heart.svg' />
}

export default HeartIcon
