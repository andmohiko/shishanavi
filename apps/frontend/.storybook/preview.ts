import type { Preview } from '@storybook/react'

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
      defaultViewport: 'desktop',
      layout: 'fullscreen',
    },
  },
}

export default preview
