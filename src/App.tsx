import { css } from '@linaria/core'
import { MainTheme } from './components/MainTheme'
import { Button } from './components/Button'
import { Stack } from './components/Stack'
import { Headline } from './components/Headline'
import { GradientText } from './components/GradientText'

const App = () => {
  return (
    <Stack align='center' justify='center' gap={0.75} stretch>
      <Headline>
        <GradientText>rerere</GradientText>
      </Headline>
      <MainTheme />
      <p
        className={css`
          margin: 0;
        `}
      >
        Linaria is a zero-runtime CSS in JS
      </p>
      <Button>I am clickable! 🫧</Button>
    </Stack>
  )
}

export default App
