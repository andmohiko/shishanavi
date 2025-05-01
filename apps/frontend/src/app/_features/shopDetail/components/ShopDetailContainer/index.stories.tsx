import type { Meta, StoryObj } from '@storybook/react'

import { ShopDetailContainer } from '.'

import { cardMock } from '~/app/_features/shopList/components/ShopListContainer/type'

type T = typeof ShopDetailContainer

const meta = {
  title: 'features/containers/ShopDetailContainer',
  component: ShopDetailContainer,
  args: {
    shop: cardMock[0],
    shopId: '1',
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
