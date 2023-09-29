import { Block } from '../../LinariaComponents/Block'
import { Typography } from '../../LinariaComponents/Typography'

interface CastInformationProps {
  data: {
    title: string
    text: string
  }
}

const CastInformation = ({ data }: CastInformationProps) => {
  return (
    <Block gap={32} orientation='horizontal'>
      <Typography weight='700' lineHeight='24px' minWidth='73px'>
        {data.title}
      </Typography>
      <Typography weight='400' lineHeight='24px'>
        {data.text}
      </Typography>
    </Block>
  )
}

export default CastInformation
