import { Label } from '../LinariaComponents/Label'
import { Typography } from '../LinariaComponents/Typography'

interface MovieLabelProps {
  text: string
}

const MovieLabel = ({ text }: MovieLabelProps) => {
  return (
    <Label>
      <Typography lineHeight='16px' weight='400' size={12}>
        {text} 
      </Typography>
    </Label>
  )
}

export default MovieLabel
