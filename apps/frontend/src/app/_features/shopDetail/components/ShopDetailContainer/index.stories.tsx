import type { Meta, StoryObj } from '@storybook/react'

import { ShopDetailContainer } from '.'

import { mockShop } from '~/app/_features/shopDetail/type'

type T = typeof ShopDetailContainer

const meta = {
  title: 'features/containers/ShopDetailContainer',
  component: ShopDetailContainer,
  args: {
    shop: mockShop,
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
