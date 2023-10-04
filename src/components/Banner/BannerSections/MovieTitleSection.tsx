import {
  MOVIE_DESCRIPTION,
  MOVIE_LABELS,
  MOVIE_TITLE,
} from '../../../constants/constants'
import MovieLabel from '../../MovieLabel/MovieLabel'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { HeadlineSC } from '../../HeadLine/Headline.styled'
import { TypographySC } from '../../Typography/Typography.styled'
import { Orientation } from '../../../style_variables/CSS_PROPERTIES'

const MovieTitleSection = () => {
  return (
    <WrapperSC gap='16px'>
      <WrapperSC gap='8px'>
        <WrapperSC orientation={Orientation.Row} gap='8px'>
          {MOVIE_LABELS.map(({ id, text }: { id: number; text: string }) => (
            <MovieLabel key={id} text={text} />
          ))}
        </WrapperSC>

        <HeadlineSC weight='700' lineHeight='51px'>
          {MOVIE_TITLE}
        </HeadlineSC>
      </WrapperSC>

      <TypographySC
        lineHeight='24px'
        weight='400'
        height='48px'
        overflow='hidden'
        display='-webkit-box'
        lineClamp='2'
        boxOrient='vertical'
      >
        {MOVIE_DESCRIPTION}
      </TypographySC>
    </WrapperSC>
  )
}

export default MovieTitleSection
