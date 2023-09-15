import { MOVIE_DESCRIPTION, MOVIE_TITLE } from '../../../constants/constants'
import { Block } from '../../LinariaComponents/Block'
import { Headline } from '../../LinariaComponents/Headline'
import { Typography } from '../../LinariaComponents/Typography'

const MovieTitleSection = () => {
  return (
    <Block gap={32}>
      <Headline weight='700' lineHeight='51px'>
        {MOVIE_TITLE}
      </Headline>
      <Typography lineHeight='24px' weight='400'>
        {MOVIE_DESCRIPTION}
      </Typography>
    </Block>
  )
}

export default MovieTitleSection
