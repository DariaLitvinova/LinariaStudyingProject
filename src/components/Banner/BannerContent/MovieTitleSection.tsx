import {
  MOVIE_DESCRIPTION,
  MOVIE_LABELS,
  MOVIE_TITLE,
} from '../../../constants/constants'
import MovieLabel from '../../Elements/MovieLabel'
import { Block } from '../../LinariaComponents/Block'
import { Headline } from '../../LinariaComponents/Headline'
import { Typography } from '../../LinariaComponents/Typography'

const MovieTitleSection = () => {
  return (
    <Block gap={16}>
      <Block gap={8}>
        <Block orientation='horizontal' gap={8}>
          {MOVIE_LABELS.map(({ id, text }: { id: number; text: string }) => (
            <MovieLabel key={id} text={text} />
          ))}
        </Block>

        <Headline weight='700' lineHeight='51px'>
          {MOVIE_TITLE}
        </Headline>
      </Block>

      <Typography
        lineHeight='24px'
        weight='400'
        height='48px'
        overflow='hidden'
        display='-webkit-box'
        lineClamp='2'
        boxOrient='vertical'
      >
        {MOVIE_DESCRIPTION}
      </Typography>
    </Block>
  )
}

export default MovieTitleSection
