import { css } from '@linaria/core'

css`
  :global() {
    :root {
      --new-surface-surface-5: #181818;
      --new-on-surface-on-surface-1: #fff;
      --new-on-surface-on-surface-2: #979797;
      --new-primary-primary-gradient: linear-gradient(
        94deg,
        #3077b7 5.44%,
        #49448d 35.29%,
        #cd3984 101.9%
      );
      --new-primary-primary-gradient-hover: linear-gradient(
        94deg,
        #428dd0 5.44%,
        #5d4fa1 35.29%,
        #dd4b9b 101.9%
      );
      --new-primary-primary-gradient-pressed: linear-gradient(
        94deg,
        #2c6396 5.44%,
        #473784 35.29%,
        #a53672 101.9%
      );
      --new-surface-surface-3: #333;
      --new-surface-surface-opacity-3: rgba(255, 255, 255, 0.10);
      --new-surface-surface-opacity-2: rgba(1, 1, 1, 0.60)
    }

    @font-face {
      font-family: 'Plus Jakarta Sans';
      src: url(../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf);
    }

    html,
    body,
    #root {
      box-sizing: border-box;
      background-color: var(--new-surface-surface-5);
      color: var(--new-on-surface-on-surface-1);
      font-family: 'Plus Jakarta Sans';
    }
  }
`
