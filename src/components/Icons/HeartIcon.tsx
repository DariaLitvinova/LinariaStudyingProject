import { Icon } from '../LinariaComponents/Icon'

interface HeartIconProps {
  isActive: boolean
}

const HeartIcon = ({ isActive }: HeartIconProps) => {
  if (isActive) {
    return <Icon url='src/assets/images/icons/heart-fill.svg' />
  }

  return <Icon url='src/assets/images/icons/heart.svg' />
}

export default HeartIcon
