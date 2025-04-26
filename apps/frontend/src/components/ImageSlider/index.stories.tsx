import type { Meta, StoryObj } from '@storybook/react'

import { ImageSlider } from './'

type T = typeof ImageSlider

const meta = {
  component: ImageSlider,
  args: {
    images: [
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
      '/test.jpg',
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
