import { Banner } from './components/LinariaComponents/Banner'
import { SectionWrapper } from './components/LinariaComponents/SectionWrapper'
import BannerContent from './components/Banner/BannerContent'

const App = () => {
  return (
    <SectionWrapper>
      <Banner
        justify='flex-end'
        gap={52}
        padding='64px 135px'
        maxWidth={1920}
        height={892}
        margin='0 auto'
        url='src/assets/images/horizontal-tenet.png'
      >
        <BannerContent />
      </Banner>
    </SectionWrapper>
  )
}

export default App
