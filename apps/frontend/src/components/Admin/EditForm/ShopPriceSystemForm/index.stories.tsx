import type { Meta, StoryObj } from '@storybook/react'

import { ShopPriceSystemForm } from '.'

type T = typeof ShopPriceSystemForm

const meta = {
  component: ShopPriceSystemForm,
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
