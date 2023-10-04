import { LabelWrapperSC } from './LabelWrapper.styled'
import { TypographySC } from '../Typography/Typography.styled'

interface IMovieLabelProps {
  text: string
}

const MovieLabel = ({ text }: IMovieLabelProps) => {
  return (
    <LabelWrapperSC>
      <TypographySC lineHeight='16px' weight='400' size={12}>
        {text} 
      </TypographySC>
    </LabelWrapperSC>
  )
}

export default MovieLabel
