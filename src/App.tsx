import { Button } from './components/Button'
import { Banner } from './components/Banner'
import { ButtonText } from './components/ButtonText'
import { SectionWrapper } from './components/SectionWrapper'
import { BTN_TITLE_DETAILS, BTN_TITLE_WATCH } from './constants/constants'

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
          <ButtonText lineHeight="24px" weight='700'>{BTN_TITLE_WATCH}</ButtonText>
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
          <ButtonText lineHeight="24px" weight='700'>{BTN_TITLE_DETAILS}</ButtonText>
        </Button>
      </Banner>
    </SectionWrapper>
  )
}

export default App
