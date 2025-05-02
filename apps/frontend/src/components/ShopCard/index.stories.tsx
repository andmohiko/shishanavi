import type { Meta, StoryObj } from '@storybook/react'

import { ShopCard } from './'

import { cardMock } from '~/app/_features/shopList/type'

type T = typeof ShopCard

const meta = {
  component: ShopCard,
  args: {
    shop: cardMock[0],
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
