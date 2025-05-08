import type { Meta, StoryObj } from '@storybook/react'

import { cardMock } from './type'

import { ShopListContainer } from '.'

type T = typeof ShopListContainer

const meta = {
  title: 'features/containers/ShopListContainer',
  component: ShopListContainer,
  args: {
    shopList: cardMock,
    searchAreas: [
      { id: 1, name: '全て', isSelected: true },
      { id: 2, name: '池袋', isSelected: false },
      { id: 3, name: '渋谷', isSelected: false },
      { id: 4, name: '難波', isSelected: false },
    ],
  },
} satisfies Meta<T>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: {
    shopList: [],
  },
}

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
