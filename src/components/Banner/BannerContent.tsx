import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerContent/AdditionalInfoSection'
import ButtonsSection from './BannerContent/ButtonsSection'
import CreatorSection from './BannerContent/CreatorSection'
import MovieTitleSection from './BannerContent/MovieTitleSection'

const BannerContent = () => {
  return (
    <Block gap={52} width='817px' justify='flex-end' align='flex-start'>
      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />
    </Block>
  )
}

export default BannerContent
