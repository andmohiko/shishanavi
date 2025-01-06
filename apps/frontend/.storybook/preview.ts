import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../src/styles/reset.css'
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
        smallMobile: {
          name: 'Small Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
}

export default preview
