import type { Meta, StoryObj } from '@storybook/react'

import { ImageGallery } from './'

type T = typeof ImageGallery

const meta = {
  component: ImageGallery,
  args: {
    images: ['/test2.jpg', '/test3.jpg', '/test4.jpg', '/test5.jpg'],
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'smallMobile',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
