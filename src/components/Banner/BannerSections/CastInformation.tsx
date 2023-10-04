import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { TypographySC } from '../../Typography/Typography.styled'
import { Orientation } from '../../../style_variables/CSS_PROPERTIES'

interface ICastInformationProps {
  data: {
    title: string
    text: string
  }
}

const CastInformation = ({ data }: ICastInformationProps) => {
  return (
    <WrapperSC gap='32px' orientation={Orientation.Row}>
      <TypographySC weight='700' lineHeight='24px' minWidth='73px'>
        {data.title}
      </TypographySC>
      <TypographySC weight='400' lineHeight='24px'>
        {data.text}
      </TypographySC>
    </WrapperSC>
  )
}

export default CastInformation
