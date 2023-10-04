import { BannerWrapperSC} from './components/Wrapper/BannerWrapper.styled'
import BannerContent from './components/Banner/BannerContent'

const App = () => {
  return (
      <BannerWrapperSC
        justify='flex-end'
        gap='52px'
        padding='64px 135px'
        maxWidth='1920px'
        height='892px'
        margin='0 auto'
        url='src/assets/images/horizontal-tenet.png'
      >
        <BannerContent />
      </BannerWrapperSC>
  )
}

export default App
