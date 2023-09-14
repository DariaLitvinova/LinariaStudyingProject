import { css } from '@linaria/core'

css`
  :global() {
    :root {
      --new-surface-surface-5: #181818;
      --linaria-1: #f15f00;
      --linaria-2: #ff0005;
      --text: #fff000;
      --bg: #000;
    }

    html,
    body,
    #root {
      background-color: var(--new-surface-surface-5);
      color: var(--text);
    }

    body {
      font-family: sans-serif;
    }
  }
`
