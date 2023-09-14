import { Button } from './components/LinariaComponents/Button'
import { Banner } from './components/LinariaComponents/Banner'
import { ButtonText } from './components/LinariaComponents/ButtonText'
import { SectionWrapper } from './components/LinariaComponents/SectionWrapper'
import { BTN_TITLE_DETAILS, BTN_TITLE_WATCH } from './constants/constants'
import { Icon } from './components/LinariaComponents/Icon'

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
        <Button
          display='inline-flex'
          gap={8}
          height={52}
          padding='0px 24px'
          backgroundColor='var(--new-primary-primary-gradient)'
          backgroundColorHover='var(--new-primary-primary-gradient-hover)'
          backgroundColorActive='var(--new-primary-primary-gradient-pressed)'
        >
          <Icon url='src/assets/images/icons/play.svg' />
          <ButtonText lineHeight='24px' weight='700'>
            {BTN_TITLE_WATCH}
          </ButtonText>
        </Button>
        <Button
          display='inline-flex'
          gap={8}
          height={52}
          padding='0px 24px'
          backgroundColor='var(--new-surface-surface-opacity-3)'
          backgroundColorHover='var(--new-surface-surface-3)'
          backgroundColorActive='var(--new-surface-surface-opacity-2)'
        >
          <Icon url='src/assets/images/icons/shape.svg' />
          <ButtonText lineHeight='24px' weight='700'>
            {BTN_TITLE_DETAILS}
          </ButtonText>
        </Button>
      </Banner>
    </SectionWrapper>
  )
}

export default App
