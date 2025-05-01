import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import 'ress'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        // サポート最小サイズSP
        smallMobile: {
          name: 'Small Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        // tablet
        tablet: {
          name: 'Tablet',
          styles: {
            width: '1024px',
            height: '1366px',
          },
          type: 'tablet',
        },
      },
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
}

export default preview
