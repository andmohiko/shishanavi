import type { Meta, StoryObj } from '@storybook/react'

import { cardMock } from './type'

import { ShopListContainer } from '.'

type T = typeof ShopListContainer

const meta = {
  title: 'features/containers/ShopListContainer',
  component: ShopListContainer,
  args: {
    shopList: cardMock,
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
