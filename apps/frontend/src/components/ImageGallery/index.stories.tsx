import type { Meta, StoryObj } from '@storybook/react'

import { ImageGallery } from './'

type T = typeof ImageGallery

const meta = {
  component: ImageGallery,
  args: {
    images: [
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
      '/images/instagram.png',
      '/images/instagram.png',
      '/images/instagram.png',
      '/images/instagram.png',
    ],
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
