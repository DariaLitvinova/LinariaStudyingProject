import { COLORS } from './COLORS';
import { css } from '@linaria/core'

css`
  :global() {
    :root {
      ${COLORS.NEW_SURFACE_5}: #181818;
      ${COLORS.NEW_SURFACE_ON_SURFACE_1}: #fff;
      ${COLORS.NEW_SURFACE_ON_SURFACE_2}: #979797;
      ${COLORS.NEW_SURFACE_ON_SURFACE_3}: #555;
      ${COLORS.NEW_PRIMARY_GRADIENT}: linear-gradient(
        94deg,
        #3077b7 5.44%,
        #49448d 35.29%,
        #cd3984 101.9%
      );
      ${COLORS.NEW_PRIMARY_GRADIENT_HOVER}: linear-gradient(
        94deg,
        #428dd0 5.44%,
        #5d4fa1 35.29%,
        #dd4b9b 101.9%
      );
      ${COLORS.NEW_PRIMARY_GRADIENT_PRESSED}: linear-gradient(
        94deg,
        #2c6396 5.44%,
        #473784 35.29%,
        #a53672 101.9%
      );
      ${COLORS.NEW_SURFACE_3}: #333;
      ${COLORS.NEW_SURFACE_OPACITY_3}: rgba(255, 255, 255, 0.1);
      ${COLORS.NEW_SURFACE_OPACITY_2}: rgba(1, 1, 1, 0.6);
      ${COLORS.NEW_OUTLINE_BORDER}: #333;
      ${COLORS.NEW_SURFACE_4}: #252525;
      ${COLORS.SURFACE_GRADIENT_1}: linear-gradient(
        359.07deg,
        #000000 23.32%,
        rgba(0, 0, 0, 0) 127.44%
      );
      ${COLORS.SURFACE_GRADIENT_2}: linear-gradient(
        180.26deg,
        rgba(0, 0, 0, 0) 14.11%,
        rgba(0, 0, 0, 0.74) 71.42%
      );
      ${COLORS.ERROR}: #B63948;
    }

    @font-face {
      font-family: 'Plus Jakarta Sans';
      src: url(../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf);
    }

    html,
    body,
    #root {
      box-sizing: border-box;
      background-color: var(${COLORS.NEW_SURFACE_5});
      color: var(${COLORS.NEW_SURFACE_ON_SURFACE_1});
      font-family: 'Plus Jakarta Sans';
    }
  }
`
